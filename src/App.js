import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Label,
} from "reactstrap";
import Navigation from "./Components/Navigation";
import Dashboard from "./Components/Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <br />
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <h4>
                    <Label style={{ color: "green" }}>Turkey </Label>
                    <sub>
                      <Label style={{ color: "red", fontStyle: "bold" }}>
                        Covid-19
                        <sub>
                          <Label style={{ color: "orange" }}>ReactApp</Label>{" "}
                        </sub>
                      </Label>{" "}
                    </sub>
                  </h4>
                </CardHeader>
              </Card>
              <br />
            </Col>
          </Row>

          <Row>
            <Col xs="3">
              <Navigation />
            </Col>
            <Col xs="9">
              <Dashboard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
