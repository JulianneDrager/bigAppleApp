import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateElbowB = () => {
  const [elbowB, setElbowB] = useState(false);
  // elbow prices
  const [elbowBPrice, setElbowBPrice] = useState("");
  // elbow length qty
  const [elbowBQty, setElbowBQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setElbowB(
          res.data.details.map((a) => a.elbowSize.map((b) => b.elbowB))
        );
        setElbowBPrice(res.data.details.map((a) => a.elbowBPrice));
        setElbowBQty(res.data.details.map((a) => a.elbowBQty));
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
        elbowBPrice: elbowBPrice,
        elbowBQty: elbowBQty,
        // },
      },
    }).then((res) => {
      console.log("RES", res);
      navigate("/review");
    });
  };

  // NOTE A: sends elbowBPrice to server ----------------------------------------
  const sendPriceB = () => {
    const lengthQtyPrice = elbowBQty * 35;
    setElbowBPrice(lengthQtyPrice);
  };

  const updatePrice = elbowBQty * 35;

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

        <div style={subContainer}>
          {/* elbow B SIZE ------------------------------------*/}
          <hr style={{ margin: ".3rem", border: "0" }} />
          <Form.Control
            style={{ display: elbowB ? "block" : "none" }}
            value={elbowB ? "2 1/2" : "N/A"}
          />

          {/* ELBOW B QTY -------------------------------------*/}
          <Form.Label>QTY:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="# OF ELBOWS"
            style={{ height: "35px", margin: "0 0 .6rem 0" }}
            value={elbowBQty}
            onChange={(e) => setElbowBQty(e.target.value)}
          />

          <p
            style={{
              fontSize: "2rem",
            }}
          >
            {/* ELBOW B COST ----------------------------------*/}
            Cost ${updatePrice}
          </p>
        </div>

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
export default UpdateElbowB;
