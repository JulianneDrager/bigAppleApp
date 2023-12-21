import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";


// this is an iterable component; designed to cycle through data from a data object (InformationData.js on this case)
const InformationProps = (props) => {
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
              required
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
