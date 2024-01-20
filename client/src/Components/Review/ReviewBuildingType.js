import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewBuildingType = () => {
  const [centralStation, setCentralStation] = useState([]);
  const [firePump, setFirePump] = useState([]);
  const [jockeyPump, setJockeyPump] = useState([]);
  const [localPump, setLocalPump] = useState([]);

  const [id, setId] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/options/getOptions`,
    })
      .then(function (res) {
        setCentralStation(res.data.map((r) => r.centralStation));
        setFirePump(res.data.map((r) => r.firePump));
        setJockeyPump(res.data.map((r) => r.jockeyPump));
        setLocalPump(res.data.map((r) => r.localPump));
        setId(res.data.map((r) => r._id));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setCentralStation, setFirePump, setJockeyPump, setLocalPump]);

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const centralStationResult = centralStation.slice(-1)[0];
  const firePumpResult = firePump.slice(-1)[0];
  const jockeyPumpResult = jockeyPump.slice(-1)[0];
  const localPumpResult = localPump.slice(-1)[0];

  return (
    <>
      <br />
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Col>
          <h3>BUILDING TYPE</h3>
          <Form.Control
            style={{
              display: centralStationResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={centralStationResult ? "CENTRAL STATION" : "N/A"}
          />
          <Form.Control
            style={{
              display: firePumpResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={firePumpResult ? "FIRE PUMP" : "N/A"}
          />
          <Form.Control
            style={{
              display: jockeyPumpResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={jockeyPumpResult ? "JOCKEY PUMP" : "N/A"}
          />
          <Form.Control
            style={{
              display: localPumpResult ? "block" : "none",
              backgroundColor: "lightGray",
            }}
            value={localPumpResult ? "LOCAL PUMP" : "N/A"}
          />
        </Col>
        <Link
          style={{ display: "block" }}
          type="submit"
          to={`/updateBuildingType/${idResult}`}
        >
          EDIT
        </Link>
      </div>
      <hr />
    </>
  );
};
export default ReviewBuildingType;

// to UPDATE
// add id useState: const [id,setID] = useState("")
// change id snapshot on get axios .then req: setId(res.data.map((r) => r._id));
// get last element from array with slice:const idResult = id.slice(-1)[0];
// add idResult to http req
// ---do this by updating App.js with http sting: <Route exact path="/updateBuildingType/:id" element={<UpdateBuildingType />} />
// useParams() in UpdateBuildingType.js: `http://localhost:5000/options/updateBuildingType/${idResult}`

//backend
//create route for update
//create model and controller for update
