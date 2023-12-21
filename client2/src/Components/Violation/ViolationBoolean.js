import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ViolationBoolean = (props) => {
  const [boxIsChecked, setBoxIsChecked] = useState(false);
  const [choiceYes, setChoiceYes] = useState(true);
  const [choiceNo, setChoiceNo] = useState(true);

  const onChangeViolation = (e) => {
    if (e.target.name === "yes_violation" && e.target.checked === true) {
      setChoiceYes(false);
      setChoiceNo(true);
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
        value={boxIsChecked}
        // type="check"
        onChange={onChangeViolation}
        required
        // onClick={() => setBoxIsChecked("Violation")}
      />

      <Form.Check
        id="no_violation"
        name="no_violation"
        label="NO"
        value={boxIsChecked}
        // type="check"
        onChange={onChangeViolation}
        required
        // onClick={() => setBoxIsChecked("NO violation")}
      />
    </>
  );
};
export default ViolationBoolean;
