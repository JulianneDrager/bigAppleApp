import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

// THIS COMPONENT IS MISNAMED; IT SHOULD BE CALLED "EstimateProps"

// this is an iterable component; designed to cycle through data from a data object (InformationData.js on this case)
const InformationProps = (props, { fields, setFields }) => {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <Form.Label>{props.estimateField}</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id={props.formId}
              placeholder={props.placeholder}
              className={props.className}
              style={{
                margin: "-.5rem 0 -.5rem 0",
                backgroundColor: "#e5e5e5",
              }}
              name={props.name}
              type={props.type}
              value={fields}
              onChange={(e) =>
                setFields([
                  ...fields.slice(0, fields.id),
                  { ...fields[fields.id], value: e.target.value },
                ])
              }
              minLength={3}
              maxLength={20}
            />
            <Form.Control.Feedback type="invalid">
              {props.feedback}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>
    </>
  );
};
export default InformationProps;
