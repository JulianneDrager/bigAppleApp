// THIS IS THE MASTER COMPONENT; the others do not have a "Map" file

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import InformationData from "./InformationData";
import InformationProps from "./InformationProps";
import BuildingData from "../Building/BuildingData";
import BuildingProps from "../Building/BuildingProps";
import ManagementData from "../Management/ManagementData";
import ManagementProps from "../Management/ManagementProps";
import ViolationData from "../Violation/ViolationData";
import ViolationProps from "../Violation/ViolationProps";
import ViolationBoolean from "../Violation/ViolationBoolean";
import { Form } from "react-bootstrap";
import TypeOfBuildingData from "../TypeOfBuilding/TypeOfBuildingData";
import TypeOfBuildingProps from "../TypeOfBuilding/TypeOfBuildingProps";
import TypeOfSystemData from "../TypeOfSystem/TypeOfSystemData";
import TypeOfSystemProps from "../TypeOfSystem/TypeOfSystemProps";
import SignageData from "../Signage/SignageData";
import SignageProps from "../Signage/SignageProps";


// MISNAMED... THIS IS THE MASTER COMPONENT; the others do not have a "Map" Component
// estimate auto #, estimator name and phone
const InformationMap = () => {
  const wrapperStyle = { margin: "2rem 0" };

  // const navigate = useNavigate();
  const refForm = useRef();

  // estimate auto #, estimator name and phone
  const EstimateInfoList = InformationData.map((info) => {
    return <InformationProps key={info.id} {...info} />;
  });

  // building types
  const BuildingType = TypeOfBuildingData.map((type) => {
    return <TypeOfBuildingProps key={type.id} {...type} />;
  });

  // building address
  const BuildingInfoList = BuildingData.map((building) => {
    return <BuildingProps key={building.id} {...building} />;
  });

  // requested, Management/owner of building, FDNY test
  const RequestByList = ManagementData.map((management) => {
    return <ManagementProps key={management.id} {...management} />;
  });

  // violation boolean, due date, date of estimate
  const ViolationList = ViolationData.map((violation) => {
    return <ViolationProps key={violation.id} {...violation} />;
  });

  // system types
  const SystemTypeList = TypeOfSystemData.map((type) => {
    return <TypeOfSystemProps key={type.id} {...type} />;
  });

    // signage
    const SignageList = SignageData.map((sign) => {
      return <SignageProps key={sign.id} {...sign} />;
    });

  return (
    <>
      <h1>BIG APPLE SAMPLE APP</h1>

      <Form
        id="contact"
        ref={refForm}
        // onSubmit={sendEmail}
        // className={form}
        autoComplete="on"
      >
        {/* estimate auto #, estimator name and phone  */}
        <div style={wrapperStyle}>{EstimateInfoList}</div>
        <hr />

        {/* building address */}
        <div style={wrapperStyle}>{BuildingInfoList}</div>
        <hr />

        {/* requested, Management/owner of building, FDNY test */}
        <div style={wrapperStyle}>{RequestByList}</div>
        <hr />

        {/* violation boolean, due date, date of estimate */}
        <ViolationBoolean />
        <hr />

        <div style={wrapperStyle}>{ViolationList}</div>
        <hr />

        {/* building type - central station, fire-pump, jockey-pump */}
        <h3>TYPE OF BUILDING</h3>
        <div style={wrapperStyle}>{BuildingType}</div>
        <hr />

        {/* building type - combo, sprinkler, stand pipe */}
        <h3>SYSTEM TYPES</h3>
        <div style={wrapperStyle}>{SystemTypeList}</div>
        <hr />

        {/* building type - combo, sprinkler, stand pipe */}
        <h3>SIGNAGE</h3>
        <div style={wrapperStyle}>{SignageList}</div>
        <hr />

      </Form>
    </>
  );
};
export default InformationMap;
