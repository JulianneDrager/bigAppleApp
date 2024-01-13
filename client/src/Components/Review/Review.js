import React, { useState } from "react";
import ReviewGeneral from "./ReviewGeneral";
import { Button, Col, Form, Image } from "react-bootstrap";
import ReviewBuildingType from "./ReviewBuildingType";
import ReviewSystemType from "./ReviewSystemType";
import ReviewSignage from "./ReviewSignage";
import ReviewPipeMaterial from "./Materials/ReviewPipeMaterial";
import ReviewLabor from "./Labor/ReviewLabor";

const Review = () => {
  const [totalPipePrice, setTotalPipePrice] = useState("");
  const [totalElbowPrice, setTotalElbowPrice] = useState("");
  const [totalTeePrice, setTotalTeePrice] = useState("");
  const [price, setPrice] = useState("");

  // console.log(totalTeePrice);

  // total of all prices
  const finalTotal =
    parseInt(totalPipePrice) +
    parseInt(totalElbowPrice) +
    parseInt(totalTeePrice);

  // console.log("test", finalTotal);

  const btnStyle = {
    backgroundColor: "#c84b50",
    border: "0",
    width: "90%",
    borderRadius: ".3rem",
    padding: "1rem",
  };

  const appleLink =
    "https://img1.wsimg.com/isteam/ip/6bb49086-ab23-4f12-abed-6e3e159532d0/logo/header.JPG/:/rs=h:160,cg:true,m/qt=q:95";

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image
          src={appleLink}
          className="img-fluid"
          style={{
            padding: "0 0 1rem 0",
            margin: "0 auto",
          }}
        />
      </div>

      <ReviewGeneral />
      <ReviewBuildingType />
      <ReviewSystemType />
      <ReviewSignage />
      <ReviewPipeMaterial
        totalPipePrice={totalPipePrice}
        setTotalPipePrice={setTotalPipePrice}
        totalElbowPrice={totalElbowPrice}
        setTotalElbowPrice={setTotalElbowPrice}
        totalTeePrice={totalTeePrice}
        setTotalTeePrice={setTotalTeePrice}
      />
      <ReviewLabor price={price} setPrice={setPrice} finalTotal={finalTotal} />

      <Col>
        {/* this will send email */}
        <div style={{ textAlign: "center", padding: "1rem 0" }}>
          <Button style={btnStyle}>SUBMIT FOR REVIEW</Button>
        </div>
      </Col>
    </>
  );
};
export default Review;
