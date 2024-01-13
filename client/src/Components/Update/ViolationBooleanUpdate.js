import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ViolationBooleanUpdate = ({ violation, setViolation }) => {
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
      setViolation(false);
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
      setViolation(false);
    }
  };
  return (
    <>
      <Form.Label>UPDATE VIOLATION</Form.Label>
      <Form.Check
        id="yes_violation"
        name="yes_violation"
        label="VIOLATION"
        value={violation}
        // type="check"
        onChange={onChangeViolation}
        onClick={() => setViolation("Violation")}
      />

      <Form.Check
        id="no_violation"
        name="no_violation"
        label="NOT A VIOLATION"
        value={violation}
        // type="check"
        onChange={onChangeViolationNo}
        onClick={() => setViolation("NO violation")}
      />
    </>
  );
};
export default ViolationBooleanUpdate;
