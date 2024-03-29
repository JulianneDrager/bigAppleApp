import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pipe from "./Pipe/Pipe";
import axios from "axios";
import Elbow from "./Fittings/Elbow";
import Tee from "./Fittings/Tee";
import { Button, Form, Image } from "react-bootstrap";

const Materials = () => {
  const [pipeSize, setPipeSize] = useState([]);
  const [elbowSize, setBlbowSize] = useState([]);
  const [teeSize, setTeeSize] = useState([]);

  const [pipe, setPipe] = useState("");
  const [fittings, setFittings] = useState("");
  const [tees, setTees] = useState("");

  // pipe sizes 1/2 and 2 1/2
  const [pipeA, setPipeA] = useState(false);
  const [pipeB, setPipeB] = useState(false);
  // pipe prices
  const [pipeAPrice, setPipeAPrice] = useState(0);
  const [pipeBPrice, setPipeBPrice] = useState(0);
  // pipe length qty
  const [pipeAQty, setPipeAQty] = useState("");
  const [pipeBQty, setPipeBQty] = useState("");

  // elbow sizes 1/2 and 2 1/2
  const [elbowA, setElbowA] = useState(false);
  const [elbowB, setElbowB] = useState(false);
  // elbow prices
  const [elbowAPrice, setElbowAPrice] = useState(0);
  const [elbowBPrice, setElbowBPrice] = useState(0);
  // elbow qty
  const [elbowAQty, setElbowAQty] = useState("");
  const [elbowBQty, setElbowBQty] = useState("");

  // tees sizes 1/2 and 2 1/2
  const [teeA, setTeeA] = useState(false);
  const [teeB, setTeeB] = useState(false);
  // tees prices
  const [teeAPrice, setTeeAPrice] = useState(0);
  const [teeBPrice, setTeeBPrice] = useState(0);
  // tees qty
  const [teeAQty, setTeeAQty] = useState("");
  const [teeBQty, setTeeBQty] = useState("");

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const [details, setDetails] = useState([
    {
      pipeSize: [{ pipeA, pipeB }],
      elbowSize: [{ elbowA, elbowB }],
      teeSize: [{ teeA, teeB }],
    },
  ]);

  // console.log("det", pipeA);

  const navigate = useNavigate();
  const refForm = useRef();

  const appleLink =
    "https://img1.wsimg.com/isteam/ip/6bb49086-ab23-4f12-abed-6e3e159532d0/logo/header.JPG/:/rs=h:160,cg:true,m/qt=q:95";

  const sendFormHandler = (e) => {
    e.preventDefault();
    // axios request
    axios({
      method: "POST",
      url: "http://localhost:5000/materials/createMaterials",
      headers: { "Content-Type": "application/json" },
      data: {
        pipe: pipe,
        fittings: fittings,
        tees: tees,
        details: {
          pipeSize: [{ pipeA, pipeB }],
          elbowSize: [{ elbowA, elbowB }],
          teeSize: [{ teeA, teeB }],

          pipeAPrice: pipeAPrice,
          pipeBPrice: pipeBPrice,
          pipeAQty: pipeAQty,
          pipeBQty: pipeBQty,

          elbowAPrice: elbowAPrice,
          elbowBPrice: elbowBPrice,
          elbowAQty: elbowAQty,
          elbowBQty: elbowBQty,

          teeAPrice: teeAPrice,
          teeBPrice: teeBPrice,
          teeAQty: teeAQty,
          teeBQty: teeBQty,
        },
      },
    }).then(function (response) {
      // console.log("res", response.data.details);
      navigate("/labor");
    });
  };

  // SEND DATA ------------------------------------------------------

  const sendPipePriceA = () => {
    const lengthQtyPrice = pipeAQty * 100;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof pipeAPrice) {
      setPipeAPrice(parseInt(lengthQtyPrice));
    }
  };

  const sendPipePriceB = () => {
    const lengthQtyPrice = pipeBQty * 250;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof pipeAPrice) {
      setPipeBPrice(parseInt(lengthQtyPrice));
    }
  };

  const sendElbowPriceA = () => {
    const qtyPrice = elbowAQty * 25;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof elbowAPrice) {
      setElbowAPrice(parseInt(qtyPrice));
    }
  };

  const sendElbowPriceB = () => {
    const qtyPrice = elbowBQty * 35;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof elbowBPrice) {
      setElbowBPrice(parseInt(qtyPrice));
    }
  };

  const sendTeePriceA = () => {
    const qtyPrice = teeAQty * 20;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof teeBPrice) {
      setTeeAPrice(parseInt(qtyPrice));
    }
  };

  const sendTeePriceB = () => {
    const qtyPrice = teeBQty * 29;
    // checks if state is a number and adds lengthQtyPrice to pipeAPrice
    if (typeof teeBPrice) {
      setTeeBPrice(parseInt(qtyPrice));
    }
  };

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
      <Form
        id=""
        ref={refForm}
        onSubmit={sendFormHandler}
        // className={form}
        autoComplete="on"
      >
        <Pipe
          pipeA={pipeA}
          setPipeA={setPipeA}
          pipeB={pipeB}
          setPipeB={setPipeB}
          pipeAQty={pipeAQty}
          setPipeAQty={setPipeAQty}
          pipeBQty={pipeBQty}
          setPipeBQty={setPipeBQty}
          setShowA={setShowA}
          setShowB={setShowB}
        />

        <hr />

        <Elbow
          elbowA={elbowA}
          setElbowA={setElbowA}
          elbowB={elbowB}
          setElbowB={setElbowB}
          elbowAPrice={elbowAPrice}
          setElbowAPrice={setElbowAPrice}
          elbowBPrice={elbowBPrice}
          setElbowBPrice={setElbowBPrice}
          elbowAQty={elbowAQty}
          setElbowAQty={setElbowAQty}
          elbowBQty={elbowBQty}
          setElbowBQty={setElbowBQty}
          setShowA={setShowA}
          setShowB={setShowB}
        />

        <hr />

        <Tee
          teeA={teeA}
          setTeeA={setTeeA}
          teeB={teeB}
          setTeeB={setTeeB}
          teeAPrice={teeAPrice}
          teeBPrice={teeBPrice}
          teeAQty={teeAQty}
          setTeeAQty={setTeeAQty}
          teeBQty={teeBQty}
          setTeeBQty={setTeeBQty}
          setShowA={setShowA}
          setShowB={setShowB}
        />

        <hr />
        <Button
          onClick={() => {
            sendPipePriceA();
            sendPipePriceB();
            sendElbowPriceA();
            sendElbowPriceB();
            sendTeePriceA();
            sendTeePriceB();
          }}
          type="submit"
          value="send"
        >
          SAVE
        </Button>
      </Form>
    </>
  );
};
export default Materials;
