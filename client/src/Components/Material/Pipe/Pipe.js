import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const Pipes = ({
  pipeA,
  setPipeA,
  pipeB,
  setPipeB,
  pipeAPrice,
  setPipeAPrice,
  pipeBPrice,
  setPipeBPrice,
  pipeAQty,
  setPipeAQty,
  pipeBQty,
  setPipeBQty,
}) => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const onChangePipeA = (e) => {
    // if pipeA is checked...
    if (e.target.name === "pipe-a" && e.target.checked === true) {
      setShowA(true);
      setPipeA(true);
    }
    // if pipeA is un-checked
    if (e.target.checked === false) {
      setShowA(false);
      setPipeA(false);
    }
    // if both pipeA and pipeB are un-checked
    if (e.target.name === "pipe-a" && "pipe-b" && e.target.checked === false) {
      setShowA(false);
      setPipeA(false);
    }
  };

  const onChangePipeB = (e) => {
    // if pipeB is checked...
    if (e.target.name === "pipe-b" && e.target.checked === true) {
      setShowB(true);
      setPipeB(true);
    }
    // if pipeB is un-checked
    if (e.target.checked === false) {
      setShowB(false);
      setPipeB(false);
    }

    // if both pipeA and pipeB are un-checked
    if (e.target.name === "pipe-a" && "pipe-b" && e.target.checked === false) {
      setShowB(false);
      setPipeB(false);
    }
  };

  // states to show/hide "record estimate" button onClick
  const [hideA, setHideA] = useState(false);
  const [hideB, setHideB] = useState(false);

  // NOTE A: sends pipeAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = pipeAQty * 100;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof pipeAPrice === "number") {
      setPipeAPrice(parseInt(pipeAPrice) + parseInt(lengthQtyPrice));
      setHideA(true);
    }
  };
  // resets pipeAPrice and PipeAQty to 0
  // shows "record estimate" button when rest button is clicked
  const resetPriceA = () => {
    if (typeof pipeAPrice === "number") {
      setPipeAPrice(0);
      setPipeAQty(0);
      setHideA(false);
    }
  };

  // see noteA ----------------------------------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = pipeBQty * 250;
    if (typeof pipeBPrice === "number") {
      setPipeBPrice(parseInt(pipeBPrice) + parseInt(lengthQtyPrice));
      setHideB(true);
    }
  };
  console.log("A", pipeAPrice);

  const resetPriceB = () => {
    if (typeof pipeBPrice === "number") {
      setPipeBPrice(0);
      setPipeBQty(0);
      setHideB(false);
    }
  };

  return (
    <>
      <Form.Label>
        <b>MATERIAL</b>
      </Form.Label>
      <Row>
        <Form.Label>
          <em>PIPE</em>
        </Form.Label>
        <Col>
          <Form.Check
            id="pipe-a"
            name="pipe-a"
            label="1/2 PIPE"
            style={{ fontWeight: "bold" }}
            value={pipeA}
            onChange={onChangePipeA}
          />
          <Col></Col>
          <Col>
            {pipeA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="LENGTH AMOUNT"
                  style={{ height: "50px" }}
                  value={pipeAQty}
                  onChange={(e) => setPipeAQty(e.target.value)}
                />

                {/* if hideA is true */}
                <p
                  style={{
                    fontSize: "2rem",
                    display: hideA ? "block" : "none",
                  }}
                >
                  Cost ${pipeAPrice}
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
            id="pipe-b"
            name="pipe-b"
            label="2 1/2 PIPE"
            style={{ fontWeight: "bold" }}
            value={pipeB}
            onChange={onChangePipeB}
          />
        </div>
        <Col>
          {pipeB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="Number of 2 1/2 Lengths"
                style={{ height: "50px" }}
                value={pipeBQty}
                onChange={(e) => setPipeBQty(e.target.value)}
              />
              <p
                style={{ fontSize: "2rem", display: hideB ? "block" : "none" }}
              >
                Cost ${pipeBPrice}
              </p>
              <Button
                style={{ display: hideB ? "none" : "block" }}
                onClick={sendPriceB}
              >
                Record Estimatee:
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
export default Pipes;
