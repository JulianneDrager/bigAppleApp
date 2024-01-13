import { Form, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReviewPipes = () => {
  const [totalPipePrice, setTotalPipePrice] = useState("");
  const [pipe, setPipe] = useState("");
  // pipe sizes 1/2 and 2 1/2
  const [pipeA, setPipeA] = useState(false);
  const [pipeB, setPipeB] = useState(false);
  // pipe prices
  // const [pipeAPrice, setPipeAPrice] = useState("");
  // const [pipeBPrice, setPipeBPrice] = useState("");
  // pipe length qty
  const [pipeAQty, setPipeAQty] = useState("");
  const [pipeBQty, setPipeBQty] = useState("");

  const { id, detailsId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterial/${id}`,
    })
      .then(function (res) {
        setPipeA(res.data.details.map((a) => a.pipeSize.map((b) => b.pipeA)));
        setPipeB(res.data.details.map((a) => a.pipeSize.map((b) => b.pipeB)));
        // setPipeAPrice(res.data.details.map((a) => a.pipeAPrice));
        // setPipeBPrice(res.data.details.map((a) => a.pipeBPrice));
        setPipeAQty(res.data.details.map((a) => a.pipeAQty));
        setPipeBQty(res.data.details.map((a) => a.pipeBQty));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

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

  const navigate = useNavigate();

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/materials/update/${id}/${detailsId}`,
      data: {
        pipe: pipe,

        pipeA: pipeA,
        pipeB: pipeB,

        // pipeAPrice: pipeAPrice,
        // pipeBPrice: pipeBPrice,

        pipeAQty: pipeAQty,
        pipeBQty: pipeBQty,
      },
    }).then((res) => {
      setPipeAQty(res.data.details.map((r) => r.pipeAQty));
      setPipeBQty(res.data.details.map((r) => r.pipeBQty));
      console.log(res.data.details.map((r) => r.pipeAQty));
      // console.log("test", res.details.pipeAPrice);
    });
  };

  return (
    <>
      <Form
        action="materials/update/:id/:detailsId"
        method="post"
        onSubmit={updateHandler}
      >
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
                style={{ display: pipeA ? "block" : "none" }}
                value={pipeA ? "1/2" : "N/A"}
              />
              <hr style={{ margin: ".3rem", border: "0" }} />
              <Form.Control
                style={{ display: pipeB ? "block" : "none" }}
                value={pipeB ? "2 1/2" : "N/A"}
              />
            </div>
            <div>
              <Form.Label>
                Length: <br />
                (1 = 10')
              </Form.Label>
              <Form.Control
                style={{ display: pipeAQty ? "block" : "none" }}
                value={pipeAQty}
                onChange={(e) => setPipeAQty(e.target.value)}
              />
              <hr style={{ margin: ".3rem", border: "0" }} />
              <Form.Control
                style={{ display: pipeBQty ? "block" : "none" }}
                value={pipeBQty}
                onChange={(e) => setPipeBQty(e.target.value)}
              />
            </div>
            {/* <div>
              <Form.Label>
                COST: <hr style={{ margin: ".74rem", border: "none" }} />
              </Form.Label>
              <Form.Control
                style={{ display: pipeAPrice ? "block" : "none" }}
                value={"$" + pipeAPrice}
                onChange={(e) => setPipeAPrice(e.target.value)}
              />
              <hr style={{ margin: ".3rem", border: "0" }} />
              <Form.Control
                style={{ display: pipeBPrice ? "block" : "none" }}
                value={"$" + pipeBPrice}
              />
              <Form.Label>TOTAL </Form.Label>
              <Form.Control value={"$" + totalPrice} />
            </div> */}
          </div>
        </Col>
        <Button type="submit">UPDATE</Button>
        <br />
      </Form>
    </>
  );
};
export default ReviewPipes;
