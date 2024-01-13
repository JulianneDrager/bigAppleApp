import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const Elbow = ({
  elbowA,
  setElbowA,
  elbowB,
  setElbowB,
  elbowAPrice,
  setElbowAPrice,
  elbowBPrice,
  setElbowBPrice,
  elbowAQty,
  setElbowAQty,
  elbowBQty,
  setElbowBQty,
}) => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const onChangeElbowA = (e) => {
    // if elbowA is checked...
    if (e.target.name === "elbow-a" && e.target.checked === true) {
      setShowA(true);
      setElbowA(true);
    }
    // if elbowA is un-checked
    if (e.target.checked === false) {
      setShowA(false);
      setElbowA(false);
    }
    // if both elbowA and elbowB are un-checked
    if (
      e.target.name === "elbow-a" &&
      "elbow-b" &&
      e.target.checked === false
    ) {
      setShowA(false);
      setElbowA(false);
    }
  };

  const onChangeElbowB = (e) => {
    // if elbowB is checked...
    if (e.target.name === "elbow-b" && e.target.checked === true) {
      setShowB(true);
      setElbowB(true);
    }
    // if elbowB is un-checked
    if (e.target.checked === false) {
      setShowB(false);
      setElbowB(false);
    }
    // if both elbowA and elbowB are un-checked
    if (
      e.target.name === "elbow-a" &&
      "elbow-b" &&
      e.target.checked === false
    ) {
      setShowB(false);
      setElbowB(false);
    }
  };

  // states to show/hide "record estimate" button onClick
  const [hideA, setHideA] = useState(false);
  const [hideB, setHideB] = useState(false);

  // NOTE A: sends pipeAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = elbowAQty * 25;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof elbowAPrice === "number") {
      setElbowAPrice(parseInt(elbowAPrice) + parseInt(lengthQtyPrice));
      setHideA(true);
    }
  };
  // resets pipeAPrice and PipeAQty to 0
  // shows "record estimate" button when rest button is clicked
  const resetPriceA = () => {
    if (typeof elbowAPrice === "number") {
      setElbowAPrice(0);
      setElbowAQty(0);
      setHideA(false);
    }
  };

  // see noteA ----------------------------------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = elbowBQty * 35;
    if (typeof elbowBPrice === "number") {
      setElbowBPrice(parseInt(elbowBPrice) + parseInt(lengthQtyPrice));
      setHideB(true);
    }
  };
  console.log("A", elbowAPrice);
  console.log("B", elbowBPrice);

  const resetPriceB = () => {
    if (typeof elbowBPrice === "number") {
      setElbowBPrice(0);
      setElbowBQty(0);
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
            id="elbow-a"
            name="elbow-a"
            label="1/2 ELBOW"
            style={{ fontWeight: "bold" }}
            value={elbowA}
            onChange={onChangeElbowA}
          />
          <Col></Col>
          <Col>
            {elbowA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="NUMBER OF ELBOWS"
                  style={{ height: "50px" }}
                  value={elbowAQty}
                  onChange={(e) => setElbowAQty(e.target.value)}
                />
                {/* if hideA is true */}
                <p
                  style={{
                    fontSize: "2rem",
                    display: hideA ? "block" : "none",
                  }}
                >
                  Cost ${elbowAPrice}
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
            id="elbow-b"
            name="elbow-b"
            label="2 1/2 ELBOW"
            style={{ fontWeight: "bold" }}
            value={elbowB}
            onChange={onChangeElbowB}
          />
        </div>
        <Col>
          {elbowB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="NUMBER OF ELBOWS"
                style={{ height: "50px" }}
                value={elbowBQty}
                onChange={(e) => setElbowBQty(e.target.value)}
              />
              <p
                style={{ fontSize: "2rem", display: hideB ? "block" : "none" }}
              >
                Cost ${elbowBPrice}
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
export default Elbow;
