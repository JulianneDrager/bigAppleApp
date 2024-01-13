import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const inline = {
  margin: "-.5rem 0 -.5rem 0",
  backgroundColor: "#e5e5e570",
};

const EstimateStatic = ({
  name,
  setName,
  phone,
  setPhone,
  number,
  setNumber,
}) => {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <Form.Label>ESTIMATE</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="name"
              name="estimate"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={inline}
              type="text"
              placeholder="125463265"
              minLength={3}
              maxLength={20}
            />
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Form.Label>NAME OF ESTIMATOR</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="estimator_name"
              name="estimator_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inline}
              placeholder="John Doe"
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
            <Form.Control.Feedback type="invalid">
              Estimator name required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Form.Label>CUSTOMER PHONE #</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="estimator_phone"
              name="estimator_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inline}
              placeholder="123-456-7890"
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
            <Form.Control.Feedback type="invalid">
              Estimator phone required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>
    </>
  );
};
export default EstimateStatic;
