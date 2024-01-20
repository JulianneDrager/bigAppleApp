import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdatePipeB = () => {
  const [pipeB, setPipeB] = useState(false);
  // pipe prices
  const [pipeBPrice, setPipeBPrice] = useState("");
  // pipe length qty
  const [pipeBQty, setPipeBQty] = useState("");
  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setPipeB(res.data.details.map((a) => a.pipeSize.map((b) => b.pipeB)));
        setPipeBPrice(res.data.details.map((a) => a.pipeBPrice));
        setPipeBQty(res.data.details.map((a) => a.pipeBQty));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

  // styles --------------------------------------------------------
  const subContainer = {
    backgroundColor: "lightGray",
    padding: "1rem",
    gap: ".2rem",
  };

  const pipeDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const navigate = useNavigate();

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/materials/updateDet/${id}/${detailsId}`,
      data: {
        pipeBPrice: pipeBPrice,
        pipeBQty: pipeBQty,
      },
    }).then((res) => {
      navigate("/review");
    });
  };

  // NOTE A: sends pipeBPrice to server ----------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = pipeBQty * 150;
    // checks if state is a number and adds lengthQtyPrice to pipeBPrice
    setPipeBPrice(lengthQtyPrice);
  };

  const updatePrice = pipeBQty * 150;

  // console.log("QTYA", pipeBQty);

  return (
    <>
      <Form
        action="materials/updateDet/:id/:detailsId"
        method="post"
        onSubmit={updateHandler}
      >
        <div style={pipeDiv}>
          <Form.Label>
            <h3>PIPE MATERIALS:</h3>
          </Form.Label>
        </div>
        {/* PIPE A SIZE --------------------------------------*/}
        <div style={subContainer}>
          <Form.Label>PIPE SIZE:</Form.Label>
          <Form.Control
            style={{ display: pipeB ? "block" : "none" }}
            value={pipeB ? "2 1/2" : "N/A"}
          />
          {/* PIPE A QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="LENGTH AMOUNT"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={pipeBQty}
            onChange={(e) => setPipeBQty(e.target.value)}
          />
        </div>

        <p
          style={{
            fontSize: "2rem",
          }}
        >
          {/* PIPE A COST ----------------------------------*/}
          Cost ${updatePrice}
        </p>

        <Button onClick={sendPriceB} type="submit">
          UPDATE
        </Button>
        <br />
        <Link to={"/review"} type="submit">
          BACK
        </Link>
      </Form>
    </>
  );
};
export default UpdatePipeB;
