import { Form, Col, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewPipeElbows = ({ totalElbowPrice, setTotalElbowPrice }) => {
  // elbow sizes 1/2 and 2 1/2
  const [elbowA, setElbowA] = useState([]);
  const [elbowB, setElbowB] = useState([]);
  // elbow prices
  const [elbowAPrice, setElbowAPrice] = useState([]);
  const [elbowBPrice, setElbowBPrice] = useState([]);
  // elbow qty
  const [elbowAQty, setElbowAQty] = useState([]);
  const [elbowBQty, setElbowBQty] = useState([]);

  const [id, setId] = useState("");
  const [detailsId, setDetailsId] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/materials/getMaterials`,
    })
      .then(function (res) {
        setElbowA(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.elbowA))
          )
        );
        setElbowB(
          res.data.map((a) =>
            a.details.map((b) => b.elbowSize.map((c) => c.elbowB))
          )
        );
        setElbowAPrice(
          res.data.map((a) => a.details.map((b) => b.elbowAPrice))
        );
        setElbowBPrice(
          res.data.map((a) => a.details.map((b) => b.elbowBPrice))
        );

        setElbowAQty(res.data.map((a) => a.details.map((b) => b.elbowAQty)));
        setElbowBQty(res.data.map((a) => a.details.map((b) => b.elbowBQty)));

        setDetailsId(res.data.map((a) => a.details.map((b) => b._id)));
        setId(res.data.map((r) => r._id));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [
    setElbowA,
    setElbowB,
    setElbowAPrice,
    setElbowBPrice,
    setElbowAQty,
    setElbowBQty,
  ]);

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const detailsIdResult = detailsId.slice(-1)[0];
  const elbowAResult = elbowA.slice(-1)[0];
  const elbowBResult = elbowB.slice(-1)[0];
  const elbowAPriceResult = elbowAPrice.slice(-1)[0];
  const elbowBPriceResult = elbowBPrice.slice(-1)[0];
  const elbowAQtyResult = elbowAQty.slice(-1)[0];
  const elbowBQtyResult = elbowBQty.slice(-1)[0];

  // get total for elbow material
  const totalElbow = parseInt(elbowAPriceResult) + parseInt(elbowBPriceResult);
  setTotalElbowPrice(totalElbow);

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

  const fittingDiv = {
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
        <div style={fittingDiv}>
          <Form.Label>
            <h3>FITTINGS MATERIALS: </h3>
          </Form.Label>
          <br />
          <Form.Label>
            <h4>ELBOWS: </h4>
          </Form.Label>
        </div>

        {elbowAQtyResult >= 1 && (
          <div style={subContainer}>
            <div>
              <Form.Control
                style={{ display: elbowAResult ? "block" : "none" }}
                value={elbowAResult ? "SIZE: 1/2" : "N/A"}
              />
              <Link
                style={linkStyle}
                type="submit"
                to={`/updateElbowA/${idResult}/${detailsIdResult}`}
              >
                EDIT
              </Link>
            </div>
            <div>
              <Form.Control
                style={{ display: elbowAQtyResult ? "block" : "none" }}
                value={"QTY:" + elbowAQtyResult}
              />
            </div>
            <div>
              <Form.Control
                style={{ display: elbowAPriceResult ? "block" : "none" }}
                value={"$" + elbowAPriceResult}
              />
            </div>
          </div>
        )}

        {/* ELBOW B------------------------------------------------------------ */}

        <div style={subContainer}>
          {elbowBQtyResult >= 1 && (
            <>
              <div>
                <Form.Control
                  style={{ display: elbowBResult ? "block" : "none" }}
                  value={elbowBResult ? "SIZE: 2 1/2" : "N/A"}
                />
                <Link
                  style={linkStyle}
                  type="submit"
                  to={`/updateElbowB/${idResult}/${detailsIdResult}`}
                >
                  EDIT
                </Link>
              </div>
              <div>
                <Form.Control
                  style={{ display: elbowBQtyResult ? "block" : "none" }}
                  value={"QTY: " + elbowBQtyResult}
                />
              </div>
              <div style={{ margin: "0 0 1rem 0" }}>
                <Form.Control
                  style={{ display: elbowBPriceResult ? "block" : "none" }}
                  value={"$" + elbowBPriceResult}
                />
              </div>
            </>
          )}
        </div>
        {/* ELBOW TOTAL -------------------------------------------------- */}

        <div style={totalDiv}>
          <hr style={{ border: "none", margin: ".3rem" }} />
          <Form.Label style={reducePadding}>ELBOW TOTAL: </Form.Label>
          <Form.Control value={"$" + totalElbowPrice} />
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
                  to={`/updateElbowA/${idResult}/${detailsIdResult}`}
                >
                  ADD 1/2 ELBOW
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
                  to={`/updateElbowB/${idResult}/${detailsIdResult}`}
                >
                  ADD 2 1/2 ELBOW
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
export default ReviewPipeElbows;
