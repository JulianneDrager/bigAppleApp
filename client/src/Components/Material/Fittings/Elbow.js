import React from "react";
import { Col, Form, Row } from "react-bootstrap";
const elbows = ({
  elbowA,
  setElbowA,
  elbowB,
  setElbowB,
  elbowAQty,
  setElbowAQty,
  elbowBQty,
  setElbowBQty,
  setShowA,
  setShowB,
}) => {
  const onChangeElbowA = (e) => {
    // if ElbowA is checked...
    if (e.target.name === "elbow-a" && e.target.checked === true) {
      setShowA(true);
      setElbowA(true);
    }
    // if ElbowA is un-checked
    if (e.target.checked === false) {
      setShowA(false);
      setElbowA(false);
    }
    // if both ElbowA and ElbowB are un-checked
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
    // if ElbowB is checked...
    if (e.target.name === "elbow-b" && e.target.checked === true) {
      setShowB(true);
      setElbowB(true);
    }
    // if ElbowB is un-checked
    if (e.target.checked === false) {
      setShowB(false);
      setElbowB(false);
    }

    // if both ElbowA and ElbowB are un-checked
    if (
      e.target.name === "elbow-a" &&
      "elbow-b" &&
      e.target.checked === false
    ) {
      setShowB(false);
      setElbowB(false);
    }
  };

  const updateElbowPriceA = elbowAQty * 25;
  const updateElbowPriceB = elbowBQty * 35;

  console.log("update", updateElbowPriceA);

  // style
  const pStyle = { fontSize: "2rem" };
  const hrStyle = { margin: "1rem", border: "0" };
  const inputStyle = { height: "50px" };
  const checkStyle = { fontWeight: "bold" };

  return (
    <>
      <Form.Label>
        <b>FITTINGS</b>
      </Form.Label>
      <Row>
        <Form.Label>
          <em>ELBOW</em>
        </Form.Label>
        <Col>
          <Form.Check
            id="elbow-a"
            name="elbow-a"
            label="1/2 ELBOW"
            style={checkStyle}
            value={elbowA}
            onChange={onChangeElbowA}
          />
          <Col></Col>
          <Col>
            {elbowA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="ENTER QTY"
                  style={inputStyle}
                  value={elbowAQty}
                  onChange={(e) => setElbowAQty(e.target.value)}
                />

                <p style={pStyle}>Cost ${updateElbowPriceA}</p>
                <hr style={hrStyle} />
              </>
            )}
          </Col>
        </Col>
      </Row>
      {/* elbow B -------------------------------------------------------- */}
      <Row>
        <div>
          <Form.Check
            id="elbow-b"
            name="elbow-b"
            label="2 1/2 ELBOW"
            style={checkStyle}
            value={elbowB}
            onChange={onChangeElbowB}
          />
        </div>
        <Col>
          {elbowB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="ENTER # OF LENGTHS"
                style={inputStyle}
                value={elbowBQty}
                onChange={(e) => setElbowBQty(e.target.value)}
              />
              <p style={pStyle}>Cost ${updateElbowPriceB}</p>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default elbows;
