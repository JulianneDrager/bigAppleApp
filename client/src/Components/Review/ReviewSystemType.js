// import UserLink from "../UI/UserLink";
// import Wrapper from "../UI/Wrapper";
import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from "../Create/Create.module.css";

const ReviewSystemType = () => {
  const [combo, setCombo] = useState([]);
  const [sprinkler, setSprinkler] = useState([]);
  const [standPipe, setStandPipe] = useState([]);

  const [id, setId] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/options/getOptions`,
    })
      .then(function (res) {
        setCombo(res.data.map((r) => r.combo));
        setSprinkler(res.data.map((r) => r.sprinkler));
        setStandPipe(res.data.map((r) => r.standPipe));
        setId(res.data.map((r) => r._id));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setCombo, setSprinkler, setStandPipe]);

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];

  const comboResult = combo.slice(-1)[0];
  const sprinklerPumpResult = sprinkler.slice(-1)[0];
  const standPipePumpResult = standPipe.slice(-1)[0];

  return (
    <>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Col>
          <h3>SYSTEM TYPE</h3>
          <Form.Control
            style={{
              display: comboResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={comboResult ? "COMBO" : "N/A"}
          />
          <Form.Control
            style={{
              display: sprinklerPumpResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={sprinklerPumpResult ? "SPRINKLER" : "N/A"}
          />
          <Form.Control
            style={{
              display: standPipePumpResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={standPipePumpResult ? "STAND PIPE" : "N/A"}
          />
        </Col>
        <Link
          style={{ display: "block" }}
          type="submit"
          to={`/updateSystem/${idResult}`}
        >
          EDIT
        </Link>
      </div>
      <hr />
    </>
  );
};
export default ReviewSystemType;
