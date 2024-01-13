import React, { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManagementStatic = ({
  reqBy,
  setReqBy,
  management,
  setManagement,
  fdnyTest,
  setFdnyTest,
}) => {
  const inline = { margin: "-.5rem 0 1rem 0", backgroundColor: "#e5e5e570" };

  // const [dateValid, setDateValid] = useState(true);

  // const checkDateFunctionBlur = () => {
  //   if (!startDate === null) {
  //     setDateValid(false);
  //   } else {
  //     setDateValid(true);
  //   }
  // };

  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <Form.Label>REQ BY</Form.Label>
        <Form.Group as={Col}>
          <InputGroup hasValidation>
            <Form.Control
              id="req_by"
              name="req_by"
              value={reqBy}
              onChange={(e) => setReqBy(e.target.value)}
              style={inline}
              placeholder="Requested by"
              type="text"
              required
              minLength={3}
              maxLength={20}
            />
            <Form.Control.Feedback type="invalid">
              Requested by name is required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>

      <Form.Label>MANAGEMENT/OWNER OF BUILDING </Form.Label>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="manager"
            name="manager"
            value={management}
            onChange={(e) => setManagement(e.target.value)}
            style={inline}
            placeholder="Manager Name"
            type="text"
            required
            minLength={3}
            maxLength={20}
          />
          <Form.Control.Feedback type="invalid">
            Managers Name is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Label>FDNY TEST DATE?</Form.Label>
      <br />
      <ReactDatePicker
        selected={fdnyTest}
        onChange={(date) => setFdnyTest(date)}
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
export default ManagementStatic;
