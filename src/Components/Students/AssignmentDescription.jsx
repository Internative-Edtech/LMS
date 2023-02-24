import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../style.css";
export const AssignmentDescription = () => {
  return (
    <div>
      <div className="stdass">
        <h3 className="disc">Description</h3>
        <p >
          This is the assignment created for the submission of your Construct
          Week Projects.
        </p>
        <p> Project Submission Deadline: 8:00 PM, October 2.</p>
        <p>
          Everyone in the team must submit their presentation video in case of
          group projects.
        </p>
      </div>
      <div className="submintdiv">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Link</Form.Label>
              <Form.Control placeholder="Submit Assignment Link" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit Assignment
          </Button>
        </Form>
      </div>
    </div>
  );
};
