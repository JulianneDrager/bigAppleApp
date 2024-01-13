import React from "react";
import { Form } from "react-bootstrap";

const TypeOfSystemStatic = ({
  combo,
  setCombo,
  sprinkler,
  setSprinkler,
  standPipe,
  setStandPipe,
}) => {
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

  // console.log("Combo", combo, "SPK", sprinkler, "SPipe", standPipe);

  return (
    <>
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
      <hr />
    </>
  );
};
export default TypeOfSystemStatic;
