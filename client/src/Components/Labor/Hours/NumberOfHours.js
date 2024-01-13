import React from "react";
import { Col, Form, Row } from "react-bootstrap";
const NumberOfHours = ({
  hoursOfWork,
  setHoursOfWork,
  NumberOfDays,
  setNumberOfDays,
}) => {
  // console.log(hoursOfWork);
  return (
    <>
      <Row>
        <Col>
          <>
            <Form.Text>*NOTE: 1 day = 8/hrs</Form.Text>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Days"
              style={{ height: "50px" }}
              value={NumberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
            />
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Hours"
              style={{ height: "50px" }}
              value={hoursOfWork}
              onChange={(e) => setHoursOfWork(e.target.value)}
            />
          </>
        </Col>
      </Row>
    </>
  );
};
export default NumberOfHours;
