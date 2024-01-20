import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdatePipeA = () => {
  const [pipeA, setPipeA] = useState(false);
  // pipe prices
  const [pipeAPrice, setPipeAPrice] = useState("");
  // pipe length qty
  const [pipeAQty, setPipeAQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setPipeA(res.data.details.map((a) => a.pipeSize.map((b) => b.pipeA)));
        setPipeAPrice(res.data.details.map((a) => a.pipeAPrice));
        setPipeAQty(res.data.details.map((a) => a.pipeAQty));
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

  // NOTE A: sends pipeAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = pipeAQty * 100;
    setPipeAPrice(lengthQtyPrice);
  };

  const updatePrice = pipeAQty * 100;

  // console.log("QTYA", pipeAQty);

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/materials/updateDet/${id}/${detailsId}`,
      data: {
        pipeAPrice: pipeAPrice,
        pipeAQty: pipeAQty,
      },
    }).then((res) => {
      navigate("/review");
    });
  };

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
            style={{ display: pipeA ? "block" : "none" }}
            value={pipeA ? "1/2" : "N/A"}
          />
          {/* PIPE A QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="LENGTH AMOUNT"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={pipeAQty}
            onChange={(e) => setPipeAQty(e.target.value)}
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

        <Button onClick={sendPriceA} type="submit">
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
export default UpdatePipeA;

// resets pipeAPrice and PipeAQty to 0
// shows "Add To Estimate" button when rest button is clicked
// const resetPriceA = () => {
//   if (typeof pipeAPrice) {
//     setPipeAPrice(0);
//     setPipeAQty(0);
//   }
// };
