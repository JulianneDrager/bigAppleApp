import { Form, Col, Dropdown } from "react-bootstrap";
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

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const detailsIdResult = detailsId.slice(-1)[0];
  const pipeAResult = pipeA.slice(-1)[0];
  const pipeBResult = pipeB.slice(-1)[0];
  const pipeAPriceResult = pipeAPrice.slice(-1)[0];
  const pipeBPriceResult = pipeBPrice.slice(-1)[0];
  const pipeAQtyResult = pipeAQty.slice(-1)[0];
  const pipeBQtyResult = pipeBQty.slice(-1)[0];

  // get total price for pipes
  const totalPrice = parseInt(pipeAPriceResult) + parseInt(pipeBPriceResult);
  setTotalPipePrice(totalPrice);

  console.log(pipeAQtyResult <= 0);

  // styles
  const btnStyle = {
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  };

  const subContainer = {
    backgroundColor: "lightGray",
    padding: "0 1rem .5rem 1rem",
    display: "flex",
    gap: ".2rem",
  };

  const pipeDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const linkStyle = {
    display: "block",
    backgroundColor: "lightGray",
  };

  const reducePadding = { margin: "0" };

  const toggle = {
    backgroundColor: "#484a49",
    border: "none",
    fontSize: ".8rem",
  };

  const totalDiv = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlignLast: "end",
    alignItems: "start",
    backgroundColor: "lightGray",
    padding: "0 1rem .5rem 1rem",
  };

  return (
    <>
      <Col>
        <div style={pipeDiv}>
          <Form.Label>
            <h3>PIPE MATERIALS:</h3>
          </Form.Label>
        </div>
        {pipeAQtyResult >= 1 && (
          <div style={subContainer}>
            <div>
              <Form.Control
                style={{ display: pipeAResult ? "block" : "none" }}
                value={pipeAResult ? "SIZE: 1/2" : "N/A"}
              />

              <Link
                style={linkStyle}
                type="submit"
                to={`/updatePipeA/${idResult}/${detailsIdResult}`}
              >
                EDIT
              </Link>
            </div>

            <div>
              <Form.Control
                style={{ display: pipeAQtyResult ? "block" : "none" }}
                value={"QTY: " + pipeAQtyResult}
              />
            </div>
            <div>
              <Form.Control
                style={{ display: pipeAPriceResult ? "block" : "none" }}
                value={"$" + pipeAPriceResult}
              />
            </div>
          </div>
        )}

        {/* PIPE B------------------------------------------------------- */}

        <div style={subContainer}>
          {pipeBQtyResult >= 1 && (
            <>
              <div>
                <Form.Control
                  style={{ display: pipeBResult ? "block" : "none" }}
                  value={pipeBResult ? "SIZE: 2 1/2" : "N/A"}
                />

                <Link
                  style={linkStyle}
                  type="submit"
                  to={`/updatePipeB/${idResult}/${detailsIdResult}`}
                >
                  EDIT
                </Link>
              </div>
              <div>
                <Form.Control
                  style={{ display: pipeBQtyResult ? "block" : "none" }}
                  value={"QTY: " + pipeBQtyResult}
                />
              </div>
              <div style={{ margin: "0 0 1rem 0" }}>
                <Form.Control
                  style={{ display: pipeBPriceResult ? "block" : "none" }}
                  value={"$" + pipeBPriceResult}
                />
              </div>
            </>
          )}
        </div>
        {/* PIPE TOTAL --------------------------------------------------- */}
        <div style={totalDiv}>
          <hr style={{ border: "none", margin: ".3rem" }} />
          <Form.Label style={reducePadding}>PIPE TOTAL: </Form.Label>
          <Form.Control value={"$" + totalPipePrice} />
        </div>

        {/* DROPDOWN ----------------------------------------------------- */}
        <div style={subContainer}>
          <Dropdown>
            <Dropdown.Toggle style={toggle} id="dropdown-basic">
              ADD MORE SIZES
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                style={{
                  fontSize: ".8rem",
                }}
              >
                <Link
                  style={btnStyle}
                  type="submit"
                  to={`/updatePipeA/${idResult}/${detailsIdResult}`}
                >
                  ADD 1/2 PIPE
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                style={{
                  fontSize: ".8rem",
                }}
              >
                <Link
                  style={btnStyle}
                  type="submit"
                  to={`/updatePipeB/${idResult}/${detailsIdResult}`}
                >
                  ADD 2 1/2 PIPE
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
      <br />
    </>
  );
};
export default ReviewPipes;
