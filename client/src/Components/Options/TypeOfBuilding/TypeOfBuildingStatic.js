import React from "react";
import { Form } from "react-bootstrap";

const TypeOfBuildingStatic = ({
  centralStation,
  setCentralStation,
  firePump,
  setFirePump,
  jockeyPump,
  setJockeyPump,
  localPump,
  setLocalPump,
}) => {
  const onChangeCentralStation = (e) => {
    if (e.target.name === "central-station" && e.target.checked === true) {
      setCentralStation(true);
      // setFirePump(false);
      // setJockeyPump(false);
      // setLocalPump(false);
    }

    if (e.target.checked === false) {
      setCentralStation(false);
      // setFirePump(true);
      // setJockeyPump(true);
      // setLocalPump(true);
    }
  };

  const onChangeFirePump = (e) => {
    if (e.target.name === "fire-pump" && e.target.checked === true) {
      setFirePump(true);
    }

    if (e.target.checked === false) {
      setFirePump(false);
    }
  };

  const onChangeJockeyPump = (e) => {
    if (e.target.name === "jockey-pump" && e.target.checked === true) {
      setJockeyPump(true);
    }

    if (e.target.checked === false) {
      setJockeyPump(false);
    }
  };

  const onChangeLocalPump = (e) => {
    if (e.target.name === "local-pump" && e.target.checked === true) {
      setLocalPump(true);
    }

    if (e.target.checked === false) {
      setLocalPump(false);
    }
  };

  // console.log(
  //   "CT",
  //   centralStation,
  //   "FP",
  //   firePump,
  //   "JP",
  //   jockeyPump,
  //   "LP",
  //   localPump
  // );

  return (
    <>
      <Form.Label>TYPE OF BUILDING</Form.Label>
      <Form.Check
        id="central-station"
        name="central-station"
        label="Central Station"
        value={centralStation}
        onChange={onChangeCentralStation}
        onClick={() => setCentralStation("Central Station")}
      />

      <Form.Check
        id="fire-pump"
        name="fire-pump"
        label="Fire Pump"
        value={firePump}
        onChange={onChangeFirePump}
        onClick={() => setFirePump("Fire Pump")}
      />

      <Form.Check
        id="jockey-pump"
        name="jockey-pump"
        label="Jockey Pump"
        value={jockeyPump}
        onChange={onChangeJockeyPump}
        onClick={() => setJockeyPump("Jockey Pump")}
      />

      <Form.Check
        id="local-pump"
        name="local-pump"
        label="Local Alarm"
        value={localPump}
        onChange={onChangeLocalPump}
        onClick={() => setLocalPump("Local Pump")}
      />
      <hr />
    </>
  );
};
export default TypeOfBuildingStatic;
