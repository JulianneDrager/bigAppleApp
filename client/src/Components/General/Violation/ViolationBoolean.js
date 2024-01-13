import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ViolationBoolean = ({ violation, setViolation }) => {
  const [choiceYes, setChoiceYes] = useState(true);
  const [choiceNo, setChoiceNo] = useState(true);

  const onChangeViolation = (e) => {
    if (e.target.name === "yes_violation" && e.target.checked === true) {
      setChoiceYes(true);
      setChoiceNo(false);
      setViolation(true);
    }

    if (e.target.checked === false) {
      setChoiceYes(false);
      setChoiceNo(true);
    }
  };

  const onChangeViolationNo = (e) => {
    if (e.target.name === "no_violation" && e.target.checked === true) {
      setChoiceYes(false);
      setChoiceNo(true);
      setViolation(false);
    }

    if (e.target.checked === false) {
      setChoiceYes(true);
      setChoiceNo(false);
    }
  };
  return (
    <>
      <Form.Label>IS THIS A VIOLATION</Form.Label>
      <Form.Check
        id="yes_violation"
        name="yes_violation"
        label="YES"
        value={violation}
        // type="check"
        onChange={onChangeViolation}
        onClick={() => setViolation("Violation")}
      />

      <Form.Check
        id="no_violation"
        name="no_violation"
        label="NO"
        value={violation}
        // type="check"
        onChange={onChangeViolationNo}
        onClick={() => setViolation("NO violation")}
      />
    </>
  );
};
export default ViolationBoolean;
