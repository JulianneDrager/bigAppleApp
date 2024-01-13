import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewPipes = ({ totalPipePrice, setTotalPipePrice }) => {
  // pipe sizes 1/2 and 2 1/2
  const [pipeA, setPipeA] = useState([]);
  const [pipeB, setPipeB] = useState([]);
  // pipe prices
  const [pipeAPrice, setPipeAPrice] = useState([]);
  const [pipeBPrice, setPipeBPrice] = useState([]);
  // pipe length qty
  const [pipeAQty, setPipeAQty] = useState([]);
  const [pipeBQty, setPipeBQty] = useState([]);

  const [id, setId] = useState("");
  const [detailsId, setDetailsId] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterials`,
    })
      .then(function (res) {
        setPipeA(
          res.data.map((a) =>
            a.details.map((b) => b.pipeSize.map((c) => c.pipeA))
          )
        );
        setPipeB(
          res.data.map((a) =>
            a.details.map((b) => b.pipeSize.map((c) => c.pipeB))
          )
        );
        setPipeAPrice(res.data.map((a) => a.details.map((b) => b.pipeAPrice)));
        setPipeBPrice(res.data.map((a) => a.details.map((b) => b.pipeBPrice)));

        setPipeAQty(res.data.map((a) => a.details.map((b) => b.pipeAQty)));
        setPipeBQty(res.data.map((a) => a.details.map((b) => b.pipeBQty)));
        setId(res.data.map((r) => r._id));
        setDetailsId(res.data.map((a) => a.details.map((b) => b._id)));

        console.log(res.data.map((a) => a.details.map((b) => b.pipeBQty)));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [
    setPipeA,
    setPipeB,
    setPipeAPrice,
    setPipeBPrice,
    setPipeAQty,
    setPipeBQty,
  ]);

  // console.log("details ID", detailsId);

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const detailsIdResult = detailsId.slice(-1)[0];
  const pipeAResult = pipeA.slice(-1)[0];
  const pipeBResult = pipeB.slice(-1)[0];
  const pipeAPriceResult = pipeAPrice.slice(-1)[0];
  const pipeBPriceResult = pipeBPrice.slice(-1)[0];
  const pipeAQtyResult = pipeAQty.slice(-1)[0];
  const PipeBQtyResult = pipeBQty.slice(-1)[0];

  // get total price for pipes
  const totalPrice = parseInt(pipeAPriceResult) + parseInt(pipeBPriceResult);
  setTotalPipePrice(totalPrice);

  console.log(detailsIdResult);

  // styles
  const subContainer = {
    backgroundColor: "lightGray",
    padding: "1rem",
    display: "flex",
    gap: ".2rem",
  };

  const pipeDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  return (
    <>
      <Col>
        <div style={pipeDiv}>
          <Form.Label>
            <h3>PIPE MATERIALS:</h3>
          </Form.Label>
        </div>
        <div style={subContainer}>
          <div>
            <Form.Label>
              PIPE SIZE: <hr style={{ margin: ".74rem", border: "none" }} />
            </Form.Label>
            <Form.Control
              style={{ display: pipeAResult ? "block" : "none" }}
              value={pipeAResult ? "1/2" : "N/A"}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: pipeBResult ? "block" : "none" }}
              value={pipeBResult ? "2 1/2" : "N/A"}
            />
          </div>
          <div>
            <Form.Label>
              Length: <br />
              (1 = 10')
            </Form.Label>
            <Form.Control
              style={{ display: pipeAQtyResult ? "block" : "none" }}
              value={pipeAQtyResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: PipeBQtyResult ? "block" : "none" }}
              value={PipeBQtyResult}
            />
          </div>
          <div>
            <Form.Label>
              COST: <hr style={{ margin: ".74rem", border: "none" }} />
            </Form.Label>
            <Form.Control
              style={{ display: pipeAPriceResult ? "block" : "none" }}
              value={"$" + pipeAPriceResult}
            />
            <hr style={{ margin: ".3rem", border: "0" }} />
            <Form.Control
              style={{ display: pipeBPriceResult ? "block" : "none" }}
              value={"$" + pipeBPriceResult}
            />
            <Form.Label>TOTAL </Form.Label>
            <Form.Control value={"$" + totalPipePrice} />
          </div>
        </div>
      </Col>
      <Link
        style={{ display: "block" }}
        type="submit"
        to={`/updatePipe/${idResult}/${detailsIdResult}`}
      >
        EDIT
      </Link>
      <br />
    </>
  );
};
export default ReviewPipes;
