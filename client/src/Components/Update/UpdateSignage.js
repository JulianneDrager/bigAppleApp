import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSignage = () => {
  const [comboCurbBox, setComboCurbBox] = useState(false);
  const [comboLocation, setComboLocation] = useState(false);
  const [callFDNY, setCallFDNY] = useState(false);

  const onChangeComboCurbBox = (e) => {
    if (e.target.name === "combo-curb-box" && e.target.checked === true) {
      setComboCurbBox(true);
    }

    if (e.target.checked === false) {
      setComboCurbBox(false);
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

  const navigate = useNavigate();
  const { id } = useParams();

  console.log("CC", comboCurbBox, "CL", comboLocation, "CF", callFDNY);

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/options/update/${id}`,
      data: {
        comboCurbBox: comboCurbBox,
        comboLocation: comboLocation,
        callFDNY: callFDNY,
      },
    }).then((res) => {
      navigate(`/review`);
      console.log(res);
    });
  };

  return (
    <>
      <Form action="options/update/:id" method="post" onSubmit={updateHandler}>
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
        <Button type="submit">UPDATE</Button>
      </Form>
    </>
  );
};
export default UpdateSignage;
