import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewPipeTees = ({ totalTeePrice, setTotalTeePrice }) => {
  // tees sizes 1/2 and 2 1/2
  const [teeA, setTeeA] = useState([]);
  const [teeB, setTeeB] = useState([]);
  // tees prices
  const [teeAPrice, setTeeAPrice] = useState([]);
  const [teeBPrice, setTeeBPrice] = useState([]);
  // tees qty
  const [teeAQty, setTeeAQty] = useState([]);
  const [teeBQty, setTeeBQty] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterials`,
    })
      .then(function (res) {
        setTeeA(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.teeA))
          )
        );
        setTeeB(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.teeB))
          )
        );
        setTeeAPrice(res.data.map((a) => a.details.map((b) => b.teeAPrice)));
        setTeeBPrice(res.data.map((a) => a.details.map((b) => b.teeBPrice)));

        setTeeAQty(res.data.map((a) => a.details.map((b) => b.teeAQty)));
        setTeeBQty(res.data.map((a) => a.details.map((b) => b.teeBQty)));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setTeeA, setTeeB, setTeeAPrice, setTeeBPrice, setTeeAQty, setTeeBQty]);

  // allows for the last array element to show in review file
  const teeAResult = teeA.slice(-1)[0];
  const teeBResult = teeB.slice(-1)[0];
  const teeAPriceResult = teeAPrice.slice(-1)[0];
  const teeBPriceResult = teeBPrice.slice(-1)[0];
  const teeAQtyResult = teeAQty.slice(-1)[0];
  const teeBQtyResult = teeBQty.slice(-1)[0];

  // total price for tee materials
  const totalTee = parseInt(teeAPriceResult) + parseInt(teeAPriceResult);
  setTotalTeePrice(totalTee);
  // console.log(totalTeePrice);

  const container = {
    backgroundColor: "lightGray",
    padding: "1rem",
    display: "flex",
    gap: ".2rem",
  };

  return (
    <>
      <Col>
        <div style={container}>
          <div>
            <Form.Label>TEES: </Form.Label>
            <Form.Control
              style={{ display: teeAResult ? "block" : "none" }}
              value={teeAResult ? "1/2" : "N/A"}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: teeBResult ? "block" : "none" }}
              value={teeBResult ? "2 1/2" : "N/A"}
            />
          </div>
          <div>
            <Form.Label>QTY: </Form.Label>
            <Form.Control
              style={{ display: teeAQtyResult ? "block" : "none" }}
              value={teeAQtyResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: teeBQtyResult ? "block" : "none" }}
              value={teeBQtyResult}
            />
          </div>
          <div>
            <Form.Label>COST:</Form.Label>
            <Form.Control
              style={{ display: teeAPriceResult ? "block" : "none" }}
              value={"$" + teeAPriceResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: teeBPriceResult ? "block" : "none" }}
              value={"$" + teeBPriceResult}
            />
            <Form.Label>TOTAL </Form.Label>
            <Form.Control value={"$" + totalTeePrice} />
          </div>
        </div>
      </Col>
      <br />
    </>
  );
};
export default ReviewPipeTees;
