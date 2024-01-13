import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const inline = {
  margin: "-.5rem 0 -.5rem 0",
  backgroundColor: "#e5e5e570",
};

const BuildingStatic = ({
  city,
  setCity,
  zipcode,
  setZipCode,
  notes,
  setNotes,
  street,
  setStreet,
}) => {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <Form.Label>BUILDING ADDRESS</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="street"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              style={inline}
              type="text"
              placeholder="street"
              minLength={3}
              maxLength={20}
            />
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={inline}
              placeholder="city"
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
            <Form.Control.Feedback type="invalid">
              City is required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="state"
              name="state"
              value="NY"
              style={inline}
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="zipcode"
              name="zipcode"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
              style={inline}
              placeholder="zipcode"
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
            <Form.Control.Feedback type="invalid">
              Zipcode is required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>

      <div style={{ padding: "1rem 0 0 0" }}>
        <Form.Control
          as="textarea"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ backgroundColor: "#e5e5e570" }}
        />
      </div>
    </>
  );
};
export default BuildingStatic;
