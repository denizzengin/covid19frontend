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
            description="Bugünkü İyi̇leşen"
          />
          <ListGroupItemChecked color="success" description="Bugünkü Test" />
          <ListGroupItemChecked color="success" description="Bugünkü Vaka" />

          <ListGroupItemChecked color="success" description="Toplam Vaka" />
          <ListGroupItemChecked color="success" description="Bugünkü Vefat" />

          <ListGroupItemChecked
            color="danger"
            description="Toplam İyi̇leşen Hasta"
          />
          <ListGroupItemChecked color="danger" description="Toplam Test" />
          <ListGroupItemChecked
            color="danger"
            description="Toplam Entube Hasta"
          />

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
