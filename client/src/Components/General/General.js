// THIS IS THE MASTER COMPONENT; the others do not have a "Map" file

import React, { useRef, useContext } from "react";
import { GeneralContext } from "./Context/GeneralContext";

import { Button, Form, Image } from "react-bootstrap";
import EstimateStatic from "./Estimate/EstimateStatic";
import BuildingStatic from "./Building/BuildingStatic";
import ManagementStatic from "./Management/ManagementStatic";
import ViolationBoolean from "./Violation/ViolationBoolean";
import ViolationStatic from "./Violation/ViolationStatic";

const General = () => {
  const [
    number,
    setNumber,
    phone,
    setPhone,
    name,
    setName,
    street,
    setStreet,
    city,
    setCity,
    zipcode,
    setZipCode,
    notes,
    setNotes,
    reqBy,
    setReqBy,
    management,
    setManagement,
    fdnyTest,
    setFdnyTest,
    violation,
    setViolation,
    violationDate,
    setViolationDate,
    estimateDate,
    setEstimateDate,
    sendFormHandler,
  ] = useContext(GeneralContext);

  // const navigate = useNavigate();
  const refForm = useRef();

  return (
    <>
      <h1>BIG APPLE SAMPLE APP</h1>

      <h3>Please fill out the below to start estimate</h3>

      <Form
        // action="general/createGeneral/:generalId"
        id="contact"
        ref={refForm}
        onSubmit={sendFormHandler}
        // className={form}
        autoComplete="on"
      >
        {/* estimate auto #, estimator name and phone  */}
        <EstimateStatic
          number={number}
          setNumber={setNumber}
          phone={phone}
          setPhone={setPhone}
          name={name}
          setName={setName}
        />
        <hr style={{ border: "none" }} />

        {/* building address , street, city and zipcode */}
        <BuildingStatic
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          zipcode={zipcode}
          setZipCode={setZipCode}
          notes={notes}
          setNotes={setNotes}
        />

        <hr style={{ border: "none" }} />
        {/* req by name, management/owner, fdny test date */}
        <ManagementStatic
          reqBy={reqBy}
          setReqBy={setReqBy}
          management={management}
          setManagement={setManagement}
          fdnyTest={fdnyTest}
          setFdnyTest={setFdnyTest}
        />
        <hr style={{ border: "none" }} />
        <ViolationBoolean violation={violation} setViolation={setViolation} />

        <hr style={{ border: "none" }} />
        {/* violation due date, date of estimate */}
        <ViolationStatic
          violationDate={violationDate}
          setViolationDate={setViolationDate}
          estimateDate={estimateDate}
          setEstimateDate={setEstimateDate}
        />

        <hr />
        <Button type="submit" value="send">
          SAVE
        </Button>
      </Form>
    </>
  );
};
export default General;
