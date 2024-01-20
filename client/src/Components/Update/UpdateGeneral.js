import { Form, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ViolationBooleanUpdate from "./ViolationBooleanUpdate";

const UpdateGeneral = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [notes, setNotes] = useState("");

  const { id } = useParams();

  const [reqBy, setReqBy] = useState("");
  const [management, setManagement] = useState("");
  const [fdnyTest, setFdnyTest] = useState("");

  const [violation, setViolation] = useState("");

  const [violationDate, setViolationDate] = useState("");
  const [estimateDate, setEstimateDate] = useState("");

  console.log(violationDate);

  // GET DATA -----------------------------------------------------
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/general/getGeneral/${id}`,
    })
      .then(function (res) {
        setNumber(res.data.number);
        setPhone(res.data.phone);
        setName(res.data.name);
        setStreet(res.data.street);
        setCity(res.data.city);
        setZipCode(res.data.zipcode);
        setNotes(res.data.notes);
        setReqBy(res.data.reqBy);
        setManagement(res.data.management);
        setFdnyTest(res.data.fdnyTest);
        setViolation(res.data.violation);
        setViolationDate(res.data.violationDate);
        setEstimateDate(res.data.estimateDate);
        console.log(
          "DATA",
          res.data.map((r) => r._id)
        );
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, []);

  // UPDATE DATA ---------------------------------------------------
  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/general/update/${id}/`,
      data: {
        number: number,
        phone: phone,
        name: name,
        street: street,
        city: city,
        zipcode: zipcode,
        notes: notes,
        reqBy: reqBy,
        management: management,
        fdnyTest: fdnyTest,
        violation: violation,
        violationDate: violationDate,
        estimateDate: estimateDate,
      },
    }).then((res) => {
      navigate(`/review`);
      console.log(res);
    });
  };

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
      <Form action="general/update/:id" method="post" onSubmit={updateHandler}>
        <div style={container}>
          <br />
          <h1>Review Estimate</h1>

          {/* ESTIMATE NUMBER / NAME / DATE  ---------------------------------*/}
          <div style={subContainer}>
            <Col>
              <Form.Label style={reducePadding}>ESTIMATE NUMBER:</Form.Label>
              <Form.Control
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>NAME OF ESTIMATOR: </Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>ESTIMATE DATE: </Form.Label>
              <Form.Control
                value={estimateDate}
                onChange={(e) => setEstimateDate(e.target.value)}
              />
            </Col>

            {/* REQ BY AND MGMT OWNER CUSTOMER PHONE   ---------------------- */}
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>REQ BY: </Form.Label>
              <Form.Control
                value={reqBy}
                onChange={(e) => setReqBy(e.target.value)}
              />
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
              <Form.Control
                value={management}
                onChange={(e) => setManagement(e.target.value)}
              />
            </Col>
            <hr style={hrStyle} />
            <Col>
              <Form.Label style={reducePadding}>CUSTOMER PHONE #</Form.Label>
              <Form.Control
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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
                <Form.Control
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>City: </Form.Label>
                <Form.Control
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>State: </Form.Label>
                <Form.Control value="NY" />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>ZipCode: </Form.Label>
                <Form.Control
                  value={zipcode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Col>
              <hr style={hrStyle} />
              <Col>
                <Form.Label style={reducePadding}>Notes:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Col>
            </div>
          </div>

          <br />

          {/* VIOLATION STATUS AND DATE / FDNY TEST   ------------------ */}
          <div style={subContainer}>
            <Col>
              <Form.Label style={reducePadding}>
                <b>CURRENT VIOLATION STATUS:</b>
                {violation ? "VIOLATION" : "NO VIOLATION"}
              </Form.Label>
              <br />
              <ViolationBooleanUpdate
                violation={violation}
                setViolation={setViolation}
              />
            </Col>
            <hr style={hrStyle} />
            {violation && (
              <>
                <Col>
                  <Form.Label style={reducePadding}>
                    VIOLATION CURE DATE:
                  </Form.Label>
                  <Form.Control
                    value={violationDate}
                    onChange={(e) => setViolationDate(e.target.value)}
                  />
                </Col>
                <hr style={hrStyle} />
              </>
            )}
            <Col>
              <Form.Label style={reducePadding}>FDNY TEST DATE: </Form.Label>
              <Form.Control
                value={fdnyTest}
                onChange={(e) => setFdnyTest(e.target.value)}
              />
            </Col>
          </div>
          <Button type="submit">UPDATE</Button>
        </div>
      </Form>
    </>
  );
};
export default UpdateGeneral;
