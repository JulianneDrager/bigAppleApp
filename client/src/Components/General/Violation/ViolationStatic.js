import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

const ViolationStatic = ({
  estimateDate,
  setEstimateDate,
  violationDate,
  setViolationDate,
}) => {
  const inline = { margin: "-.5rem 0 1rem 0", backgroundColor: "#e5e5e5" };

  // const [dateValid, setDateValid] = useState(true);

  // const checkDateFunctionBlur = () => {
  //   if (!violationStartDate === null) {
  //     setDateValid(false);
  //   } else {
  //     setDateValid(true);
  //   }
  // };

  return (
    <>
      <Form.Label>VIOLATION DUE DATE?</Form.Label>
      <br />
      <ReactDatePicker
        selected={violationDate}
        onChange={(date) => setViolationDate(date)}
        // onFocus={checkDateFunctionBlur}
        // dateFormat="MM/dd/yyyy h:mm aa"
        dateFormat="MM/dd/yyyy"
        showTimeInput={false}
        isClearable={true}
        placeholderText="MM/DD/YYYY"
        // className={datePickerPhoto}
        name="time"
        min="2023-06-07"
      />
      <br />
      <br />
      <Form.Label>DATE OF ESTIMATE?</Form.Label>
      <br />
      <ReactDatePicker
        selected={estimateDate}
        onChange={(date) => setEstimateDate(date)}
        // onFocus={checkDateFunctionBlur}
        // dateFormat="MM/dd/yyyy h:mm aa"
        dateFormat="MM/dd/yyyy"
        showTimeInput={false}
        isClearable={true}
        placeholderText="MM/DD/YYYY"
        // className={datePickerPhoto}
        name="time"
        min="2023-06-07"
      />
    </>
  );
};
export default ViolationStatic;
