import React from 'react';
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export const LectureCard = ({assignment}) => {
  return (
    <React.Fragment>
        <Card body>
        <div className="mainDiv">
          <div className="div1">
          <Link to={`assignments/id=:${assignment._id}`}
>
            <h3 className="ass">
              DSA Level 1
              <sup>
                <Badge bg="danger">DSA</Badge>
              </sup>
            </h3></Link>

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
            <Button variant="primary">Join Class</Button>{" "}
          </div>
        </div>
      </Card>
    </React.Fragment>
  )
}
