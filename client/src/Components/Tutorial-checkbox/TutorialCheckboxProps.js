import React, { useState } from "react";
import { Form } from "react-bootstrap";

const TutorialCheckboxProps = (props) => {
  const [boxIsChecked, setBoxIsChecked] = useState(false);
  const [choiceYes, setChoiceYes] = useState(true);

  const onChangeOptionName = (e) => {
    if (e.target.name === props.optionName && e.target.checked === true) {
      setChoiceYes(false);
    }

    if (e.target.checked === false) {
      setChoiceYes(true);
    }
  };

  return (
    <>
      {/* <Form.Label>IS THIS A VIOLATION</Form.Label> */}
      <Form.Label>{props.optionLabel}</Form.Label>
      <Form.Check
        id={props.optionId}
        name={props.optionName}
        label={props.optionLabel}
        value={boxIsChecked}
        // type="check"
        onChange={onChangeOptionName}
        required
        // onClick={() => setBoxIsChecked("Violation")}
      />
    </>
  );
};
export default TutorialCheckboxProps;
