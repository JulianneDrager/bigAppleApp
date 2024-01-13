import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewPipeElbows = ({ totalElbowPrice, setTotalElbowPrice }) => {
  // elbow sizes 1/2 and 2 1/2
  const [elbowA, setElbowA] = useState([]);
  const [elbowB, setElbowB] = useState([]);
  // elbow prices
  const [elbowAPrice, setElbowAPrice] = useState([]);
  const [elbowBPrice, setElbowBPrice] = useState([]);
  // elbow qty
  const [elbowAQty, setElbowAQty] = useState([]);
  const [elbowBQty, setElbowBQty] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterials`,
    })
      .then(function (res) {
        setElbowA(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.elbowA))
          )
        );
        setElbowB(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.elbowB))
          )
        );
        setElbowAPrice(
          res.data.map((a) => a.details.map((b) => b.elbowAPrice))
        );
        setElbowBPrice(
          res.data.map((a) => a.details.map((b) => b.elbowBPrice))
        );

        setElbowAQty(res.data.map((a) => a.details.map((b) => b.elbowAQty)));
        setElbowBQty(res.data.map((a) => a.details.map((b) => b.elbowBQty)));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [
    setElbowA,
    setElbowB,
    setElbowAPrice,
    setElbowBPrice,
    setElbowAQty,
    setElbowBQty,
  ]);

  // allows for the last array element to show in review file
  const elbowAResult = elbowA.slice(-1)[0];
  const elbowBResult = elbowB.slice(-1)[0];
  const elbowAPriceResult = elbowAPrice.slice(-1)[0];
  const elbowBPriceResult = elbowBPrice.slice(-1)[0];
  const elbowAQtyResult = elbowAQty.slice(-1)[0];
  const elbowBQtyResult = elbowBQty.slice(-1)[0];

  // get total for elbow material
  const totalElbow = parseInt(elbowAPriceResult) + parseInt(elbowBPriceResult);
  setTotalElbowPrice(totalElbow);

  // styles
  const fittingDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const container = {
    backgroundColor: "lightGray",
    padding: "1rem",
    display: "flex",
    gap: ".2rem",
  };

  return (
    <>
      <Col>
        <div style={fittingDiv}>
          <Form.Label>
            <h3>FITTINGS MATERIALS: </h3>
          </Form.Label>
        </div>
        <div style={container}>
          <div>
            <Form.Label>ELBOWS: </Form.Label>
            <Form.Control
              style={{ display: elbowAResult ? "block" : "none" }}
              value={elbowAResult ? "1/2" : "N/A"}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: elbowBResult ? "block" : "none" }}
              value={elbowBResult ? "2 1/2" : "N/A"}
            />
          </div>
          <div>
            <Form.Label>QTY: </Form.Label>
            <Form.Control
              style={{ display: elbowAQtyResult ? "block" : "none" }}
              value={elbowAQtyResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: elbowBQtyResult ? "block" : "none" }}
              value={elbowBQtyResult}
            />
          </div>
          <div>
            <Form.Label>COST:</Form.Label>
            <Form.Control
              style={{ display: elbowAPriceResult ? "block" : "none" }}
              value={"$" + elbowAPriceResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: elbowBPriceResult ? "block" : "none" }}
              value={"$" + elbowBPriceResult}
            />
            <Form.Label>TOTAL </Form.Label>
            <Form.Control value={"$" + totalElbowPrice} />
          </div>
        </div>
      </Col>
    </>
  );
};
export default ReviewPipeElbows;
