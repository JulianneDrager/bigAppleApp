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

// estimate auto #, estimator name and phone
const InformationMap = () => {
  const wrapperStyle = { margin: "2rem 0" };

  // const navigate = useNavigate();
  const refForm = useRef();

  const EstimateInfoList = InformationData.map((info) => {
    return <InformationProps key={info.id} {...info} />;
  });

  const BuilidingType = TypeOfBuildingData.map((type) => {
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
        {/* building address */}
        <div style={wrapperStyle}>{BuildingInfoList}</div>
        {/* requested, Management/owner of building, FDNY test */}
        <div style={wrapperStyle}>{RequestByList}</div>
        {/* violation boolean, due date, date of estimate */}
        <ViolationBoolean />
        <div style={wrapperStyle}>{ViolationList}</div>
        {/* building type - central station, fire-pump, jockey-pump */}
        <div style={wrapperStyle}>{BuilidingType}</div>
      </Form>
    </>
  );
};
export default InformationMap;
