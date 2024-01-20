import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTeeB = () => {
  const [teeB, setteeB] = useState(false);
  // tee prices
  const [teeBPrice, setteeBPrice] = useState("");
  // tee length qty
  const [teeBQty, setteeBQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setteeB(res.data.details.map((a) => a.teeSize.map((b) => b.teeB)));
        setteeBPrice(res.data.details.map((a) => a.teeBPrice));
        setteeBQty(res.data.details.map((a) => a.teeBQty));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

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
        teeBPrice: teeBPrice,
        teeBQty: teeBQty,
      },
    }).then((res) => {
      console.log("RES", res);
      // console.log("QTY", teeBQty);
      navigate("/review");
    });
  };

  // NOTE A: sends teeBPrice to server ----------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = teeBQty * 25;
    // checks if state is a number and adds lengthQtyPrice to teeBPrice
    if (typeof teeBPrice) {
      setteeBPrice(lengthQtyPrice);
    }
  };

  const updatePrice = teeBQty * 25;

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
            style={{ display: teeB ? "block" : "none" }}
            value={teeB ? "1/2" : "N/A"}
          />
          {/* tee A QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="# OF TEES"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={teeBQty}
            onChange={(e) => setteeBQty(e.target.value)}
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
export default UpdateTeeB;
