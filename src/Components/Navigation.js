import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import ListGroupItemChecked from "./ListGroupItemChecked";
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItemChecked
            color="success"
            description="Toplam İyi̇leşen Hasta"
          />
          <ListGroupItemChecked color="success" description="Toplam Test" />
          <ListGroupItemChecked
            color="success"
            description="Bugünkü İyi̇leşen"
          />
          <ListGroupItemChecked color="warning" description="Toplam Vaka" />
          <ListGroupItemChecked color="warning" description="Bugünkü Test" />
          <ListGroupItemChecked color="warning" description="Bugünkü Vaka" />

          <ListGroupItemChecked
            color="danger"
            description="Toplam Entube Hasta"
          />
          <ListGroupItemChecked color="danger" description="Bugünkü Vefat" />

          <ListGroupItemChecked color="danger" description="Toplam Vefat" />
          <ListGroupItemChecked
            color="danger"
            description="Toplam Yoğun Bakim Hasta "
          />
        </ListGroup>
      </div>
    );
  }
}
