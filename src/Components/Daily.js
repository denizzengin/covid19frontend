import React, { Component } from "react";
import { Table } from "reactstrap";
export default class Daily extends Component {
  state = { data: {} };
  getData = () => {
    debugger;
    fetch("http://localhost:3002/allCovid19")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  };

  componentDidMount() {
    this.getData();
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        <Table size="sm" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Test Sayısı</th>
              <th>Vaka Sayısı</th>
              <th>Vefat Sayısı</th>
              <th>İyileşen Sayısı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
