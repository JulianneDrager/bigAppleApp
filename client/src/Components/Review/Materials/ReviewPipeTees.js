import { Form, Col, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const [id, setId] = useState("");
  const [detailsId, setDetailsId] = useState("");

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

        setDetailsId(res.data.map((a) => a.details.map((b) => b._id)));
        setId(res.data.map((r) => r._id));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setTeeA, setTeeB, setTeeAPrice, setTeeBPrice, setTeeAQty, setTeeBQty]);

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const detailsIdResult = detailsId.slice(-1)[0];
  const teeAResult = teeA.slice(-1)[0];
  const teeBResult = teeB.slice(-1)[0];
  const teeAPriceResult = teeAPrice.slice(-1)[0];
  const teeBPriceResult = teeBPrice.slice(-1)[0];
  const teeAQtyResult = teeAQty.slice(-1)[0];
  const teeBQtyResult = teeBQty.slice(-1)[0];

  // total price for tee materials
  const totalTee = parseInt(teeAPriceResult) + parseInt(teeBPriceResult);
  setTotalTeePrice(totalTee);

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
            <h3>TEES:</h3>
          </Form.Label>
        </div>
        {teeAQtyResult >= 1 && (
          <div style={subContainer}>
            <div style={{ padding: "1rem 0 0 0" }}>
              <Form.Control
                style={{ display: teeAResult ? "block" : "none" }}
                value={teeAResult ? "SIZE: 1/2" : "N/A"}
              />
              <Link
                style={linkStyle}
                type="submit"
                to={`/updateTeeA/${idResult}/${detailsIdResult}`}
              >
                EDIT
              </Link>
            </div>

            <div style={{ padding: "1rem 0 0 0" }}>
              <Form.Control
                style={{ display: teeAQtyResult ? "block" : "none" }}
                value={"QTY: " + teeAQtyResult}
              />
            </div>
            <div style={{ padding: "1rem 0 0 0" }}>
              <Form.Control
                style={{ display: teeAPriceResult ? "block" : "none" }}
                value={"$" + teeAPriceResult}
              />
            </div>
          </div>
        )}

        {/* tee B------------------------------------------------------------ */}
        {teeBQtyResult >= 1 && (
          <>
            <div style={subContainer}>
              <div style={{ padding: "1rem 0 0 0" }}>
                <Form.Control
                  style={{ display: teeBResult ? "block" : "none" }}
                  value={teeBResult ? "SIZE: 2 1/2" : "N/A"}
                />
                <Link
                  style={linkStyle}
                  type="submit"
                  to={`/updateTeeB/${idResult}/${detailsIdResult}`}
                >
                  EDIT
                </Link>
              </div>

              <div style={{ padding: "1rem 0 0 0" }}>
                <Form.Control
                  style={{ display: teeBQtyResult ? "block" : "none" }}
                  value={"QTY: " + teeBQtyResult}
                />
              </div>
              <div style={{ margin: "0 0 1rem 0", padding: "1rem 0 0 0" }}>
                <Form.Control
                  style={{ display: teeBPriceResult ? "block" : "none" }}
                  value={"$" + teeBPriceResult}
                />
              </div>
            </div>
          </>
        )}
        {/* TEE TOTAL ----------------------------------------------------=------ */}
        <div style={totalDiv}>
          <hr style={{ border: "none", margin: ".3rem" }} />
          <Form.Label style={reducePadding}>TEE TOTAL: </Form.Label>
          <Form.Control value={"$" + totalTeePrice} />
        </div>

        {/* DROPDOWN -------------------------------------------------------------- */}
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
                  to={`/updateTeeA/${idResult}/${detailsIdResult}`}
                >
                  ADD 1/2 TEE
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
                  to={`/updateTeeB/${idResult}/${detailsIdResult}`}
                >
                  ADD 2 1/2 TEE
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
export default ReviewPipeTees;
