import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const Tee = ({
  teeA,
  setTeeA,
  teeB,
  setTeeB,
  teeAPrice,
  teeBPrice,
  teeAQty,
  setTeeAQty,
  teeBQty,
  setTeeBQty,
  setShowA,
  setShowB,
}) => {
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

  const updateTeeA = teeAQty * 20;
  const updateTeeB = teeBQty * 29;

  // style
  const pStyle = { fontSize: "2rem" };
  const inputStyle = { height: "50px" };
  const checkStyle = { fontWeight: "bold" };

  return (
    <>
      <Row>
        <Col>
          <Form.Check
            id="tee-a"
            name="tee-a"
            label="1/2 TEE"
            style={checkStyle}
            value={teeA}
            onChange={onChangeTeeA}
          />
          <Col></Col>
          <Col>
            {teeA && (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="ENTER # OF TEES"
                  style={inputStyle}
                  value={teeAQty}
                  onChange={(e) => setTeeAQty(e.target.value)}
                />

                <p style={pStyle}>Cost ${updateTeeA}</p>
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
            label="2 1/2 TEE"
            style={checkStyle}
            value={teeB}
            onChange={onChangeTeeB}
          />
        </div>
        <Col>
          {teeB && (
            <>
              <Form.Control
                as="textarea"
                placeholder="ENTER # OF TEES"
                style={inputStyle}
                value={teeBQty}
                onChange={(e) => setTeeBQty(e.target.value)}
              />
              <p style={pStyle}>Cost ${updateTeeB}</p>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Tee;
