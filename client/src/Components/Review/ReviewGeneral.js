// import UserLink from "../UI/UserLink";
// import Wrapper from "../UI/Wrapper";
import { Form, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import style from "../Create/Create.module.css";

const ReviewGeneral = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [notes, setNotes] = useState("");

  const [id, setId] = useState("");

  const [reqBy, setReqBy] = useState("");
  const [management, setManagement] = useState("");
  const [fdnyTest, setFdnyTest] = useState("");

  const [violation, setViolation] = useState([]);

  const [violationDate, setViolationDate] = useState("");
  const [estimateDate, setEstimateDate] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/general/getGeneral`,
    })
      .then(function (res) {
        setNumber(res.data.map((r) => r.number));
        setPhone(res.data.map((r) => r.phone));
        setName(res.data.map((r) => r.name));
        setStreet(res.data.map((r) => r.street));
        setCity(res.data.map((r) => r.city));
        setZipCode(res.data.map((r) => r.zipcode));
        setNotes(res.data.map((r) => r.notes));
        setReqBy(res.data.map((r) => r.reqBy));
        setManagement(res.data.map((r) => r.management));
        setFdnyTest(res.data.map((r) => r.fdnyTest));
        setViolation(res.data.map((r) => r.violation));
        setViolationDate(res.data.map((r) => r.violationDate));
        setEstimateDate(res.data.map((r) => r.estimateDate));
        setId(res.data.map((r) => r._id));
        // console.log(
        //   "DATA",
        //   res.data.map((r) => r._id)
        // );
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [
    setNumber,
    setPhone,
    setName,
    setStreet,
    setCity,
    setZipCode,
    setNotes,
    setReqBy,
    setManagement,
    setFdnyTest,
    setViolation,
    setViolationDate,
    setEstimateDate,
  ]);

  const idResult = id.slice(-1)[0];
  // console.log(idResult);

  // allows for the last array element to show in review file
  const numberResult = number.slice(-1)[0];
  const phoneResult = phone.slice(-1)[0];
  const nameResult = name.slice(-1)[0];
  const streetResult = street.slice(-1)[0];
  const cityResult = city.slice(-1)[0];
  const zipcodeResult = zipcode.slice(-1)[0];
  const notesResult = notes.slice(-1)[0];
  const reqByResult = reqBy.slice(-1)[0];
  const managementResult = management.slice(-1)[0];
  const fdnyTestResult = fdnyTest.slice(-1)[0];
  const violationResult = violation.slice(-1)[0];
  const violationDateResult = violationDate.slice(-1)[0];
  const estimateDateResult = estimateDate.slice(-1)[0];

  // styles
  const container = {
    backgroundColor: "lightGray",
    padding: "0 1rem 1rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  };

  const subContainer = {
    backgroundColor: "#bbbaba",
    padding: "1rem ",
  };

  const buildingAddressDiv = { backgroundColor: "darkGray" };

  const reducePadding = { margin: "0" };

  const hrStyle = { border: "none", margin: ".1rem" };

  return (
    <>
      <form>
        <div style={container}>
          <br />
          <h1>Review Estimate</h1>

          {/* ESTIMATE NUMBER / NAME / DATE  ---------------------------------*/}

          <div style={subContainer}>
            <Col>
              <Form.Label style={reducePadding}>ESTIMATE NUMBER:</Form.Label>
              <Form.Control value={numberResult} />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>NAME OF ESTIMATOR: </Form.Label>
              <Form.Control value={nameResult} />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>ESTIMATE DATE: </Form.Label>
              <Form.Control value={estimateDateResult} />
            </Col>

            {/* REQ BY AND MGMT OWNER CUSTOMER PHONE   ---------------------- */}
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>REQ BY: </Form.Label>
              <Form.Control value={reqByResult} />
            </Col>
            <hr style={hrStyle} />
            {/* MGMT LABEL --------------------------------------------------- */}
            <Col>
              <Form.Label style={reducePadding}>
                MGMT/OWNER OF BUILDING:
              </Form.Label>
            </Col>
            {/* MGMT INPUT --------------------------------------------------- */}
            <Col>
              <hr style={hrStyle} />
              <Form.Control value={managementResult} />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>CUSTOMER PHONE #</Form.Label>
              <Form.Control value={phoneResult} />
            </Col>
          </div>

          <br />

          {/* BUILDING ADDRESS ---------------------------------------- */}

          <div style={buildingAddressDiv}>
            <div style={subContainer}>
              <Form.Label style={reducePadding}>BUILDING ADDRESS</Form.Label>
              <hr style={hrStyle} />
              <Col className="col-sm">
                <Form.Label style={reducePadding}>Street: </Form.Label>
                <Form.Control value={streetResult} />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>City: </Form.Label>
                <Form.Control value={cityResult} />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>State: </Form.Label>
                <Form.Control value="NY" />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>ZipCode: </Form.Label>
                <Form.Control value={zipcodeResult} />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>Notes:</Form.Label>
                <Form.Control as="textarea" value={notesResult} />
              </Col>
            </div>
          </div>

          <br />

          {/* VIOLATION STATUS AND DATE / FDNY TEST   ------------------ */}

          <div style={subContainer}>
            <Col>
              <Form.Label style={reducePadding}>VIOLATION STATUS: </Form.Label>
              <Form.Control
                value={violationResult ? "VIOLATION" : "NO VIOLATION"}
                style={{ color: violationResult ? "red" : "green" }}
              />
            </Col>
            <hr style={hrStyle} />
            {violationResult && (
              <>
                <Col>
                  <Form.Label style={reducePadding}>
                    VIOLATION DATE:{" "}
                  </Form.Label>
                  <Form.Control value={violationDateResult} />
                </Col>
                <hr style={hrStyle} />
              </>
            )}

            <Col>
              <Form.Label style={reducePadding}>FDNY TEST DATE: </Form.Label>
              <Form.Control value={fdnyTestResult} />
            </Col>
          </div>
          <Link
            style={{ display: "block" }}
            type="submit"
            to={`/updateGeneral/${idResult}`}
          >
            EDIT
          </Link>
        </div>
      </form>
    </>
  );
};
export default ReviewGeneral;
