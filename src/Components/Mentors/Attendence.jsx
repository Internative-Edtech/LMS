import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../style.css";
export const Attendence = () => {
  return (
    <div className="attendence_div">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Mark Attendence</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Present</option>
              <option>Absent</option>
              <option>Leave</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Class</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>DSA</option>
              <option>Coding</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <br />
        <Form.Group as={Col} controlId="formGridAssignment">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="Date" />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
