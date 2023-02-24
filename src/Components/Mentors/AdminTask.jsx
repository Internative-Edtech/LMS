import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../style.css";
function AdminTask() {
  return (
    <>
    <div className="AdminTask">

      <Form>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Course</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>DSA</option>
            <option>Coding</option>
            <option>EC Connect</option>
            <option>General</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Topic</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Class Link</Form.Label>
          <Form.Control />
        </Form.Group>
        {/* </Row> */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Time</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Mentor Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default AdminTask;
