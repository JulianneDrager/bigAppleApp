import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const BuildingProps = (props) => {
  return (
    <>
      <Form.Label>{props.buildingField}</Form.Label>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id={props.formId}
            placeholder={props.placeholder}
            className={props.className}
            style={{ margin: "-.5rem 0 -.2rem 0", backgroundColor: "#e5e5e5" }}
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
    </>
  );
};
export default BuildingProps;
