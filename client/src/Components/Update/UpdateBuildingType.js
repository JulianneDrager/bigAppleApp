import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBuildingType = () => {
  const [centralStation, setCentralStation] = useState(false);
  const [firePump, setFirePump] = useState(false);
  const [jockeyPump, setJockeyPump] = useState(false);
  const [localPump, setLocalPump] = useState(false);

  const onChangeCentralStation = (e) => {
    if (e.target.name === "central-station" && e.target.checked === true) {
      setCentralStation(true);
    }

    if (e.target.checked === false) {
      setCentralStation(false);
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

  const navigate = useNavigate();
  const { id } = useParams();

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/options/update/${id}`,
      data: {
        centralStation: centralStation,
        firePump: firePump,
        jockeyPump: jockeyPump,
        localPump: localPump,
      },
    }).then((res) => {
      navigate(`/review`);
      console.log(res);
    });
  };

  return (
    <>
      <Form action="options/update/:id" method="post" onSubmit={updateHandler}>
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
        <Button type="submit">UPDATE</Button>
      </Form>
    </>
  );
};
export default UpdateBuildingType;
