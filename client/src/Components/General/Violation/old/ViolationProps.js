import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const ViolationProps = (props) => {
  const [boxIsChecked, setBoxIsChecked] = useState(false);
  const [choiceYes, setChoiceYes] = useState(true);

  const onChangeViolation = (e) => {
    if (e.target.name === "content" && e.target.checked === true) {
      setChoiceYes(false);
    }

    if (e.target.checked === false) {
      setChoiceYes(true);
    }
  };
  return (
    <>
      <Form.Label>{props.violationField}</Form.Label>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id={props.formId}
            placeholder={props.placeholder}
            className={props.className}
            style={{ margin: "-.5rem 0 1rem 0", backgroundColor: "#e5e5e5" }}
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
export default ViolationProps;
