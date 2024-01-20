import React from "react";
import { Col, Form, Row } from "react-bootstrap";
const NumberOfMen = ({ numberOfMen, setNumberOfMen }) => {
  // console.log(numberOfMen);
  return (
    <>
      <Form.Label>
        <b>LABOR</b>
      </Form.Label>
      <Row>
        <Col>
          <>
            <Form.Text>Enter Number of Men</Form.Text>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Men"
              style={{ height: "50px" }}
              value={numberOfMen}
              onChange={(e) => setNumberOfMen(e.target.value)}
            />
          </>
        </Col>
      </Row>
    </>
  );
};
export default NumberOfMen;
