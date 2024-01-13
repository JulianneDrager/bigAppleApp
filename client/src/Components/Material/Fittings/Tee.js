import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const Tee = ({
  teeA,
  setTeeA,
  teeB,
  setTeeB,
  teeAPrice,
  setTeeAPrice,
  teeBPrice,
  setTeeBPrice,
  teeAQty,
  setTeeAQty,
  teeBQty,
  setTeeBQty,
}) => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const onChangeTeeA = (e) => {
    // if teeA is checked...
    if (e.target.name === "tee-a" && e.target.checked === true) {
      setShowA(true);
      setTeeA(true);
    }
    // if teeA is un-checked
    if (e.target.checked === false) {
      setShowA(false);
      setTeeA(false);
    }
    // if both teeA and teeB are un-checked
    if (
      e.target.name === "elbow-a" &&
      "elbow-b" &&
      e.target.checked === false
    ) {
      setShowA(false);
      setTeeA(false);
    }
  };

  const onChangeTeeB = (e) => {
    // if elbowB is checked...
    if (e.target.name === "tee-b" && e.target.checked === true) {
      setShowB(true);
      setTeeB(true);
    }
    // if elbowB is un-checked
    if (e.target.checked === false) {
      setShowB(false);
      setTeeB(false);
    }

    // if both elbowA and elbowB are un-checked
    if (
      e.target.name === "elbow-a" &&
      "elbow-b" &&
      e.target.checked === false
    ) {
      setShowB(false);
      setTeeB(false);
    }
  };

  // states to show/hide "record estimate" button onClick
  const [hideA, setHideA] = useState(false);
  const [hideB, setHideB] = useState(false);

  // NOTE A: sends TeeAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = teeAQty * 20;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof teeAPrice === "number") {
      setTeeAPrice(parseInt(teeAPrice) + parseInt(lengthQtyPrice));
      setHideA(true);
    }
  };
  // resets teeAPrice and teeAQty to 0
  // shows "record estimate" button when rest button is clicked
  const resetPriceA = () => {
    if (typeof teeAPrice === "number") {
      setTeeAPrice(0);
      setTeeAQty(0);
      setHideA(false);
    }
  };

  // see noteA ----------------------------------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = teeBQty * 29;
    if (typeof teeBPrice === "number") {
      setTeeBPrice(parseInt(teeBPrice) + parseInt(lengthQtyPrice));
      setHideB(true);
    }
  };
  console.log("A", teeAPrice);
  console.log("B", teeBPrice);

  const resetPriceB = () => {
    if (typeof teeBPrice === "number") {
      setTeeBPrice(0);
      setTeeBQty(0);
      setHideB(false);
    }
  };

  return (
    <>
      <Row>
        <Form.Label>
          <em>FITTINGS</em>
        </Form.Label>
        <Col>
          <Form.Check
            id="tee-a"
            name="tee-a"
            label="1/2 tee"
            style={{ fontWeight: "bold" }}
            value={teeA}
            onChange={onChangeTeeA}
          />
          <Col></Col>
          <Col>
            {teeA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="NUMBER OF TEES"
                  style={{ height: "50px" }}
                  value={teeAQty}
                  onChange={(e) => setTeeAQty(e.target.value)}
                />
                {/* if hideA is true */}
                <p
                  style={{
                    fontSize: "2rem",
                    display: hideA ? "block" : "none",
                  }}
                >
                  Cost ${teeAPrice}
                </p>
                <Button
                  style={{ display: hideA ? "none" : "block" }}
                  onClick={sendPriceA}
                >
                  Record Estimate:
                </Button>
                <hr style={{ margin: ".1rem", border: "0" }} />
                <Button onClick={resetPriceA}>RESET</Button>
                <hr style={{ margin: "1rem", border: "0" }} />
              </>
            )}
          </Col>
        </Col>
      </Row>
      <Row>
        <div>
          <Form.Check
            id="tee-b"
            name="tee-b"
            label="2 1/2 tee"
            style={{ fontWeight: "bold" }}
            value={teeB}
            onChange={onChangeTeeB}
          />
        </div>
        <Col>
          {teeB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="NUMBER OF teeS"
                style={{ height: "50px" }}
                value={teeBQty}
                onChange={(e) => setTeeBQty(e.target.value)}
              />
              <p
                style={{ fontSize: "2rem", display: hideB ? "block" : "none" }}
              >
                Cost ${teeBPrice}
              </p>
              <Button
                style={{ display: hideB ? "none" : "block" }}
                onClick={sendPriceB}
              >
                Record Estimate:
              </Button>
              <hr style={{ margin: ".1rem", border: "0" }} />
              <Button onClick={resetPriceB}>RESET</Button>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Tee;
