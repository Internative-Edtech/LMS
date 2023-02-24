import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../style.css";
export const AdminAssig = () => {
  return (
    <div className="AdminAss">
      <Form>
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Course</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>DSA</option>
            <option>Coding</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group as={Col} controlId="formGridAssignment">
          <Form.Label>Assignment Description</Form.Label>
          <Form.Control placeholder="Assignment Description Here" />
        </Form.Group>
        <br/>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
