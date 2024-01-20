import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateElbowA = () => {
  const [elbowA, setElbowA] = useState(false);
  // elbow prices
  const [elbowAPrice, setElbowAPrice] = useState("");
  // elbow length qty
  const [elbowAQty, setElbowAQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setElbowA(
          res.data.details.map((a) => a.elbowSize.map((b) => b.elbowA))
        );
        setElbowAPrice(res.data.details.map((a) => a.elbowAPrice));
        setElbowAQty(res.data.details.map((a) => a.elbowAQty));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

  // styles
  const subContainer = {
    backgroundColor: "lightGray",
    padding: "1rem",
    // display: "flex",
    gap: ".2rem",
  };

  const elbowDiv = {
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
        elbowAPrice: elbowAPrice,
        elbowAQty: elbowAQty,
      },
    }).then((res) => {
      console.log("RES", res);
      navigate("/review");
    });
  };

  // NOTE A: sends elbowAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = elbowAQty * 25;
    setElbowAPrice(lengthQtyPrice);
  };

  const updatePrice = elbowAQty * 25;

  return (
    <>
      <Form
        action="materials/updateDet/:id/:detailsId"
        method="post"
        onSubmit={updateHandler}
      >
        <div style={elbowDiv}>
          <Form.Label>
            <h3>ELBOW MATERIALS:</h3>
          </Form.Label>
        </div>
        {/* ELBOW A SIZE --------------------------------------*/}
        <div style={subContainer}>
          <Form.Label>ELBOW:</Form.Label>
          <Form.Control
            style={{ display: elbowA ? "block" : "none" }}
            value={elbowA ? "1/2" : "N/A"}
          />
          {/* ELBOW A QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="# OF ELBOWS"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={elbowAQty}
            onChange={(e) => setElbowAQty(e.target.value)}
          />
        </div>

        <p
          style={{
            fontSize: "2rem",
          }}
        >
          {/* elbow A COST ----------------------------------*/}
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
export default UpdateElbowA;
