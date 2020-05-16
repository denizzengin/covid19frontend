import React, { Component } from "react";
// import Dashboard from "./Components/Dashboard";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./Components/Navigation";
import GraphicCard from "./Components/GraphicCard";
import Dashboard from "./Components/Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Container className="themed-container" fluid={true}>
        <Navigation/>
        </Container> */}

        <Container className="themed-container" fluid="lg">
        <Dashboard />
          {/* <Row>
            <Col lg="3"></Col>
            <Col lg="9">
              
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}
