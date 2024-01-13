// import UserLink from "../UI/UserLink";
// import Wrapper from "../UI/Wrapper";
import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from "../Create/Create.module.css";

const ReviewSignage = () => {
  const [comboCurbBox, setComboCurbBox] = useState([]);
  const [comboLocation, setComboLocation] = useState([]);
  const [callFDNY, setCallFDNY] = useState([]);

  const [id, setId] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/options/getOptions`,
    })
      .then(function (res) {
        setComboCurbBox(res.data.map((r) => r.comboCurbBox));
        setComboLocation(res.data.map((r) => r.comboLocation));
        setCallFDNY(res.data.map((r) => r.callFDNY));
        setId(res.data.map((r) => r._id));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setComboCurbBox, setComboLocation, setCallFDNY]);

  // allows for the last array element to show in review file

  const idResult = id.slice(-1)[0];

  const comboCurbBoxResult = comboCurbBox.slice(-1)[0];
  const comboLocationResult = comboLocation.slice(-1)[0];
  const callFDNYResult = callFDNY.slice(-1)[0];

  return (
    <>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Col>
          <h3>SIGNAGE TYPE</h3>
          <Form.Control
            style={{
              display: comboCurbBoxResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={comboCurbBoxResult ? "COMBO CURB BOX" : "N/A"}
          />
          <Form.Control
            style={{
              display: comboLocationResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={comboLocationResult ? "COMBO LOCATION" : "N/A"}
          />
          <Form.Control
            style={{
              display: callFDNYResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={callFDNYResult ? "CALL FDNY" : "N/A"}
          />
        </Col>
        <Link
          style={{ display: "block" }}
          type="submit"
          to={`/updateSigns/${idResult}`}
        >
          EDIT
        </Link>
      </div>
      <br />
    </>
  );
};
export default ReviewSignage;
