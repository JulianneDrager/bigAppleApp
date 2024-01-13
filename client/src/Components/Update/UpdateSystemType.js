import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSystemType = () => {
  const [combo, setCombo] = useState(false);
  const [sprinkler, setSprinkler] = useState(false);
  const [standPipe, setStandPipe] = useState(false);

  const onChangeCombo = (e) => {
    if (e.target.name === "combo" && e.target.checked === true) {
      setCombo(true);
      // setSprinkler(false);
      // setStandPipe(false);
    }

    if (e.target.checked === false) {
      setCombo(false);
      // setSprinkler(true);
      // setStandPipe(true);
    }
  };

  const onChangeSprinkler = (e) => {
    if (e.target.name === "sprinkler" && e.target.checked === true) {
      setSprinkler(true);
    }

    if (e.target.checked === false) {
      setSprinkler(false);
    }
  };

  const onChangeStandPipe = (e) => {
    if (e.target.name === "stand-pipe" && e.target.checked === true) {
      setStandPipe(true);
    }

    if (e.target.checked === false) {
      setStandPipe(false);
    }
  };

  const navigate = useNavigate();
  const { id } = useParams();

  console.log("Combo", combo, "SPK", sprinkler, "SPipe", standPipe);

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/options/update/${id}`,
      data: {
        combo: combo,
        sprinkler: sprinkler,
        standPipe: standPipe,
      },
    }).then((res) => {
      navigate(`/review`);
      console.log(res);
    });
  };

  return (
    <>
      <Form action="options/update/:id" method="post" onSubmit={updateHandler}>
        <Form.Label>SYSTEM TYPE</Form.Label>
        <Form.Check
          id="combo"
          name="combo"
          label="Combo"
          value={combo}
          onChange={onChangeCombo}
          onClick={() => setCombo("Combo")}
        />

        <Form.Check
          id="sprinkler"
          name="sprinkler"
          label="Sprinkler"
          value={sprinkler}
          onChange={onChangeSprinkler}
          onClick={() => setSprinkler("Sprinkler")}
        />

        <Form.Check
          id="stand-pipe"
          name="stand-pipe"
          label="Stand Pipe"
          value={standPipe}
          onChange={onChangeStandPipe}
          onClick={() => setStandPipe("Stand Pipe")}
        />
        <Button type="submit">UPDATE</Button>
      </Form>
    </>
  );
};
export default UpdateSystemType;
