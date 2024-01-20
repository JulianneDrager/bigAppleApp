import React from "react";
import { Col, Form, Row } from "react-bootstrap";
const Pipes = ({
  pipeA,
  setPipeA,
  pipeB,
  setPipeB,
  pipeAQty,
  setPipeAQty,
  pipeBQty,
  setPipeBQty,
  setShowA,
  setShowB,
}) => {
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

  const updatePriceA = pipeAQty * 100;
  const updatePriceB = pipeBQty * 250;

  console.log("update", updatePriceB);

  // style
  const pStyle = { fontSize: "2rem" };
  const hrStyle = { margin: "1rem", border: "0" };
  const inputStyle = { height: "50px" };
  const checkStyle = { fontWeight: "bold" };

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
            style={checkStyle}
            value={pipeA}
            onChange={onChangePipeA}
          />
          <Col></Col>
          <Col>
            {pipeA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="ENTER # OF LENGTHS"
                  style={inputStyle}
                  value={pipeAQty}
                  onChange={(e) => setPipeAQty(e.target.value)}
                />

                <p style={pStyle}>Cost ${updatePriceA}</p>
                <hr style={hrStyle} />
              </>
            )}
          </Col>
        </Col>
      </Row>
      {/* PIPE B -------------------------------------------------------- */}
      <Row>
        <div>
          <Form.Check
            id="pipe-b"
            name="pipe-b"
            label="2 1/2 PIPE"
            style={checkStyle}
            value={pipeB}
            onChange={onChangePipeB}
          />
        </div>
        <Col>
          {pipeB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="ENTER # OF LENGTHS"
                style={inputStyle}
                value={pipeBQty}
                onChange={(e) => setPipeBQty(e.target.value)}
              />
              <p style={pStyle}>Cost ${updatePriceB}</p>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Pipes;
