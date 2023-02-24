import React from "react";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../style.css";
export const Lectures = () => {
  return (
    <div className="lecdiv">
      <Card body>
        <div className="mainDiv">
          <div className="div1">
            <h3>
              Construct Week Projects Presentation
              <sup>
                <Badge bg="danger">New</Badge>
              </sup>
            </h3>

            <Row className="mb-4">
              <Card.Text>Shivani</Card.Text>
              <Card.Text>
                sheduled <b> 28/01/2023- 2:00PM</b>
              </Card.Text>
              <h6></h6>
              <p></p>
            </Row>
          </div>
          <div className="div2">
            {/* if the date is of Upcoming class then Button needs to be visible else not visible */}
            <Button variant="primary">Join Class</Button>{" "}
          </div>
        </div>
      </Card>
      <Card body>
        <div className="mainDiv">
          <div className="div1">
            <h3>
              Construct Week Projects Presentation
              <sup>
                <Badge bg="danger">New</Badge>
              </sup>
            </h3>

            <Row className="mb-4">
              <Card.Text>Shivani</Card.Text>
              <Card.Text>
                sheduled <b> 24/01/2023- 2:00PM</b>
              </Card.Text>
              <h6></h6>
              <p></p>
            </Row>
          </div>
          <div className="div2">
            {/* <Button variant="primary" >Join Class</Button>{' '} */}
          </div>
        </div>
      </Card>
    </div>
  );
};
