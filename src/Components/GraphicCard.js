import React, { Component } from "react";
import { Card, Row, Col, CardHeader, CardBody } from "reactstrap";
import CoreGraphicLine from "./CoreGraphicLine";

class GraphicCard extends Component {
  state = { graphDataInfo: [], data: [], isFinished: true };
  getData = () => {
    fetch("http://localhost:3002/allcovid19")
      .then((response) => response.json())
      .then((data) => this.processData(data))
      .catch((error) => console.log(error));
  };

  processData = (data) => {
    //console.log(data);
    let processingData = { ...data };

    var result = Object.keys(processingData).map(function (key) {
      return [String(key), processingData[key]];
    });
    let dataItem = { barDataKey: "", data: [], title: "" };
    let temp = result[0];

    let tempResult = {};
    result.map((e) =>
      e[1]["Turkey"].map((f) =>
        Object.keys(f).forEach((g) => {
          if (!tempResult.hasOwnProperty(g)) {
            tempResult[g] = [];
          }
          let keyForDate = e[0];
          keyForDate =
            keyForDate.substr(4, 4) +
            //"-" +
            keyForDate.substr(2, 2) +
            //"-" +
            keyForDate.substr(0, 2);

          keyForDate = parseInt(keyForDate, 10);
          let obj = {};
          obj[keyForDate] = f[g];
          tempResult[g].push(obj);
        })
      )
    );

    Object.keys(tempResult).forEach((a) => {
      let temp = tempResult[a];
      console.log(a);
      console.log(temp);
      for (let i = 0; i < temp.length - 1; i++) {
        for (let j = 0; j < temp.length - i - 1; j++) {
          let current = Object.keys(temp[j]).pop();
          let after = Object.keys(temp[j + 1]).pop();
          if (after < current) {
            let t = temp[j];
            temp[j] = temp[j + 1];
            temp[j + 1] = t;
          }
        }
      }
      tempResult[a] = temp;
    });

    //tempResult = { "TOPLAM VEFAT SAYISI": tempResult["TOPLAM VEFAT SAYISI"] };
    console.log(tempResult);

    let _graphDataInfo = [];
    Object.keys(tempResult).forEach((a) => {
      dataItem.title = a;
      dataItem.barDataKey = "Turkey";

      let tempArray = tempResult[a];
      let tempData = [];
      Object.keys(tempArray).forEach((a) => {
        let d = tempArray[a];
        console.log(d);
        Object.keys(d).forEach((e) => {
          let obj = {};
          obj.date = e;
          obj.date =
            obj.date.toString().substr(6, 2) + "." + obj.date.substr(4, 2);
          obj.Turkey = d[e];
          tempData.push(obj);
        });
      });

      dataItem.data = [...tempData];
      console.log(dataItem.data);
      _graphDataInfo.push({ ...dataItem });
    });

    this.setState({ graphDataInfo: _graphDataInfo });
  };

  componentDidMount() {
    this.getData();
    this.setState({ isFinished: true });
  }

  render() {
    return (
      <div>
          <Row><br></br></Row>
        <Row>
          {this.state.graphDataInfo.map((item) => (
            <Col sm="6" key={item.title}>
              <CardHeader> {item.title} </CardHeader>
              <Card
                className="shadow-lg p-3 mb-5 bg-white rounded"
                body
                color="warning"
              >
                <CardBody>
                  <CoreGraphicLine data={item.data} />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default GraphicCard;
