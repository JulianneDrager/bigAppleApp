import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStraightTime = ({ idResult }) => {
  const [straightTime, setStraightTime] = useState([]);

  const [numberOfMen, setNumberOfMen] = useState("");
  const [hoursOfWork, setHoursOfWork] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/labor/getLabor/${id}`,
    })
      .then(function (res) {
        setStraightTime(res.data.straightTime);
        setNumberOfMen(res.data.numberOfMen || 0);
        setHoursOfWork(res.data.hoursOfWork || 0);
        setNumberOfDays(res.data.numberOfDays || 0);
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
      url: `http://localhost:5000/labor/update/${id}`,
      data: {
        numberOfMen: numberOfMen,
        hoursOfWork: hoursOfWork,
        numberOfDays: numberOfDays,
        straightTime: straightTime,
        // },
      },
    }).then((res) => {
      console.log("RES", res);
      navigate("/review");
    });
  };

  // styles -----------------------------------------------------
  const laborDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };
  const keyStyle = { padding: ".5rem", backgroundColor: "#bcbcbc" };
  const inputDiv = { display: "flex", alignItems: "center" };
  const inputStyle = { margin: "0 0 0 1rem", height: "50px" };

  // CALCULATIONS FOR TIME TYPES ---------------------------------------------------

  // hours only-no days worked * 200 hour rate
  const straightTimeOnlyHours = parseInt(hoursOfWork) * 200;
  // days worked * 8/hrs
  const straightTimeDay = parseInt(numberOfDays) * 8;
  // hours worked * $200 hour rate
  const straightTimeHours = parseInt(straightTimeDay) * 200;
  // hours worked * hour rate * number of men working
  const STtimeHoursTotal =
    parseInt(straightTimeOnlyHours) + parseInt(straightTimeHours);
  const STtotal = parseInt(STtimeHoursTotal) * parseInt(numberOfMen);

  // straight time labor/material cost
  const laborPlusMaterialTotal = parseInt(STtotal);

  return (
    <>
      <Form action="labor/update/:id" method="post" onSubmit={updateHandler}>
        <div style={laborDiv}>
          {/* KEY --------------------------------------------------------- */}
          <div style={keyStyle}>
            <h3 style={{ margin: "0 0 1rem 0" }}>
              UPDATE: STRAIGHT TIME LABOR
            </h3>
            <p>
              <b>
                KEY
                <br />
              </b>
              PAY: $200/HR PER MAN <br /> DAYS: 1 DAY = 8/HRS
            </p>
          </div>
          <br />
          {/* NUMBER OF MEN ------------------------------------------------------- */}
          <div style={inputDiv}>
            <Form.Label style={{ width: "5rem" }}>Number Of Men</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Men"
              style={inputStyle}
              value={numberOfMen}
              onChange={(e) => setNumberOfMen(e.target.value)}
            />
          </div>
          <br />
          <div style={inputDiv}>
            <Form.Label style={{ width: "5rem" }}>DAYS:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Days"
              style={inputStyle}
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
            />
          </div>
          <div style={inputDiv}>
            <Form.Label style={{ width: "5rem" }}>HRS:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Hours"
              style={inputStyle}
              value={hoursOfWork}
              onChange={(e) => setHoursOfWork(e.target.value)}
            />
          </div>
          <br />
          <Button type="submit">UPDATE</Button>
          <br />
          <br />
          {/* TIME AND MATERIAL TOTAL : S WITH HOURS AND MATERIAL ---------------*/}
          <div
            style={{
              backgroundColor: "#a8a5a5",
              padding: "1rem",
            }}
          >
            <Form.Control
              style={{ textAlign: "right", fontSize: "1.5rem" }}
              value={
                isNaN(laborPlusMaterialTotal)
                  ? "TIME AND MATERIAL TOTAL : " + 0
                  : "TIME AND MATERIAL TOTAL :  $ " + laborPlusMaterialTotal
              }
            />
          </div>
        </div>
      </Form>
    </>
  );
};
export default UpdateStraightTime;
