import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTeeA = () => {
  const [teeA, setTeeA] = useState(false);
  // tee prices
  const [teeAPrice, setTeeAPrice] = useState("");
  // tee length qty
  const [teeAQty, setTeeAQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setTeeA(res.data.details.map((a) => a.teeSize.map((b) => b.teeA)));
        setTeeAPrice(res.data.details.map((a) => a.teeAPrice));
        setTeeAQty(res.data.details.map((a) => a.teeAQty));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

  console.log(teeA);

  // styles
  const subContainer = {
    backgroundColor: "lightGray",
    padding: "1rem",
    gap: ".2rem",
  };

  const teeDiv = {
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
        teeAPrice: teeAPrice,
        teeAQty: teeAQty,
      },
    }).then((res) => {
      console.log("RES", res);
      navigate("/review");
    });
  };

  // NOTE A: sends teeAPrice to server ----------------------------------------
  const sendPriceA = () => {
    const lengthQtyPrice = teeAQty * 25;
    // checks if state is a number and adds lengthQtyPrice to teeAPrice
    if (typeof teeAPrice) {
      setTeeAPrice(lengthQtyPrice);
    }
  };

  const updatePrice = teeAQty * 25;

  return (
    <>
      <Form
        action="materials/updateDet/:id/:detailsId"
        method="post"
        onSubmit={updateHandler}
      >
        <div style={teeDiv}>
          <Form.Label>
            <h3>tee MATERIALS:</h3>
          </Form.Label>
        </div>
        {/* tee A SIZE --------------------------------------*/}
        <div style={subContainer}>
          <Form.Label>tee:</Form.Label>
          <Form.Control
            style={{ display: teeA ? "block" : "none" }}
            value={teeA ? "1/2" : "N/A"}
          />
          {/* tee A QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="# OF TEES"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={teeAQty}
            onChange={(e) => setTeeAQty(e.target.value)}
          />
        </div>

        <p
          style={{
            fontSize: "2rem",
          }}
        >
          {/* tee A COST ----------------------------------*/}
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
export default UpdateTeeA;
