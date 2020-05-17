import React, { Component } from "react";
import { Badge, ListGroupItem } from "reactstrap";
import * as logo from "../checked.png";
class ListGroupItemChecked extends Component {
  render() {
    return (
      <div>
         <ListGroupItem> 
         <Badge color={this.props.color}>
          <img src={logo} width="12" height="12" color="success" alt=""></img>{" "}
        </Badge>
        {" "}
        {this.props.description}
        </ListGroupItem>
      </div>
    );
  }
}

export default ListGroupItemChecked;
