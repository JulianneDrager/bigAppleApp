import React from "react";
import { Form } from "react-bootstrap";

const Signage = ({
  comboCurbBox,
  setComboCurbBox,
  comboLocation,
  setComboLocation,
  callFDNY,
  setCallFDNY,
}) => {
  const onChangeComboCurbBox = (e) => {
    if (e.target.name === "combo-curb-box" && e.target.checked === true) {
      setComboCurbBox(true);
      // setComboLocation(false);
      // setCallFDNY(false);
    }

    if (e.target.checked === false) {
      setComboCurbBox(false);
      // setComboLocation(true);
      // setCallFDNY(true);
    }
  };

  const onChangeComboLocation = (e) => {
    if (e.target.name === "combo-location" && e.target.checked === true) {
      setComboLocation(true);
    }

    if (e.target.checked === false) {
      setComboLocation(false);
    }
  };

  const onChangeCallFDNY = (e) => {
    if (e.target.name === "call-fdny" && e.target.checked === true) {
      setCallFDNY(true);
    }

    if (e.target.checked === false) {
      setCallFDNY(false);
    }
  };

  console.log("CC", comboCurbBox, "CL", comboLocation, "CF", callFDNY);

  return (
    <>
      <Form.Label>SIGNAGE</Form.Label>
      <Form.Check
        id="combo-curb-box"
        name="combo-curb-box"
        label="Combo Curb Box"
        value={comboCurbBox}
        onChange={onChangeComboCurbBox}
        onClick={() => setComboCurbBox("Combo Curb Box")}
      />

      <Form.Check
        id="combo-location"
        name="combo-location"
        label="Combo Location"
        value={comboLocation}
        onChange={onChangeComboLocation}
        onClick={() => setComboLocation("Combo Location")}
      />

      <Form.Check
        id="call-fdny"
        name="call-fdny"
        label="Call FDNY"
        value={callFDNY}
        onChange={onChangeCallFDNY}
        onClick={() => setCallFDNY("Stand Pipe")}
      />
      <hr />
    </>
  );
};
export default Signage;
