import React, { Component } from "react";
import {
  Card,
  Row,
  Col,
  CardHeader,
  CardBody,
  ListGroupItem,
} from "reactstrap";
import CoreGraphic from "./CoreGraphic";
import * as chartTypes from "../Constants/ChartTypes";
class GraphicCard extends Component {
  state = { graphDataInfo: [], data: [] };
  getData = () => {
    fetch("http://localhost:3002/allcovid19")
      .then((response) => response.json())
      .then((data) => this.processData(data))
      .catch((error) => console.log(error));
  };

  processData = (data) => {
    let processingData = { ...data };
    var result = Object.keys(processingData).map(function (key) {
      return [String(key), processingData[key]];
    });
    let dataItem = {
      barDataKey: "",
      data: [],
      title: "",
      chartType: chartTypes.None,
    };
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
            keyForDate.substr(2, 2) +
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

    let _graphDataInfo = [];
    let i = 0;
    Object.keys(tempResult).forEach((a) => {
      i++;

      dataItem.title = a
        .split(" ")
        .map(
          (word) => word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
        );
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

      // Random diffirent types of chart get.
      dataItem.chartType = i % 4 === 0 ? 1 : i % 4;
      dataItem.data = [...tempData];
      _graphDataInfo.push({ ...dataItem });
    });

    console.log(dataItem);
    this.setState({ graphDataInfo: _graphDataInfo });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Row>
          {this.state.graphDataInfo.map((item) => (
            <Col sm="6" key={item.title}>
              <CardHeader>
                <h6>
                  <ListGroupItem> {item.title} </ListGroupItem>
                </h6>
              </CardHeader>
              <Card
                className="shadow-lg p-3 mb-5 bg-white rounded"
                body
                color="warning"
              >
                <CardBody>
                  <CoreGraphic data={item.data} chartType={item.chartType} />
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
