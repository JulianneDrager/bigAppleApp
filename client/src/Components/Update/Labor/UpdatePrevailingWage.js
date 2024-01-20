import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePrevailingWage = () => {
  const [prevailingWage, setPrevailingWage] = useState("");
  const [prevailingWageHours, setPrevailingWageHours] = useState("");
  const [prevailingWageDays, setPrevailingWageDays] = useState("");
  const [numberOfMen, setNumberOfMen] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/labor/getLabor/${id}`,
    })
      .then(function (res) {
        setPrevailingWage(res.data.prevailingWage);
        setPrevailingWageHours(res.data.prevailingWageHours || 0);
        setPrevailingWageDays(res.data.prevailingWageDays || 0);
        setNumberOfMen(res.data.numberOfMen || 0);
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
        prevailingWage: prevailingWage,
        prevailingWageHours: prevailingWageHours,
        prevailingWageDays: prevailingWageDays,
        numberOfMen: numberOfMen,
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
  // PREVAILING WAGE --------------------------------------------------------------
  // 8/hr day worked * 400 hour rate
  const PVHoursDayHours = parseInt(prevailingWageDays || 0) * 8 * 400;
  // hours only-no days worked * 400 hour rate
  const PVHoursOnly = parseInt(prevailingWageHours || 0) * 400;
  // 8/hr day worked * 400 hour rate + hours only * 400 * 2
  const PVHrsTotal = parseInt(PVHoursDayHours) + parseInt(PVHoursOnly);
  // adding days and hours
  const PVTotal = parseInt(PVHrsTotal) * parseInt(numberOfMen);

  // prevailing wage time labor/material cost
  const PVLaborMatTotal = parseInt(PVTotal);

  // value change

  console.log("check", typeof PVLaborMatTotal);
  console.log(PVTotal);

  return (
    <>
      <Form action="labor/update/:id" method="post" onSubmit={updateHandler}>
        <div style={laborDiv}>
          {/* KEY --------------------------------------------------------- */}
          <div style={keyStyle}>
            <h3 style={{ margin: "0 0 1rem 0" }}>
              UPDATE: PREVAILING WAGE LABOR
            </h3>
            <p>
              <b>
                KEY
                <br />
              </b>
              PAY: $400/HR PER MAN <br /> DAYS: 1 DAY = 8/HRS
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
              style={{ height: "50px" }}
              value={prevailingWageDays}
              onChange={(e) => setPrevailingWageDays(e.target.value)}
            />
          </div>
          <div style={inputDiv}>
            <Form.Label style={{ width: "5rem" }}>HRS:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Hours"
              style={{ height: "50px" }}
              value={prevailingWageHours}
              onChange={(e) => setPrevailingWageHours(e.target.value)}
            />
          </div>
          <br />
          <Button type="submit">UPDATE</Button>
          <br />
          <br />
          {/* TIME AND MATERIAL TOTAL WITH HOURS AND MATERIAL ---------------*/}

          <div
            style={{
              backgroundColor: "#a8a5a5",
              padding: "1rem",
            }}
          >
            <Form.Control
              style={{ textAlign: "right", fontSize: "1.5rem" }}
              value={
                isNaN(PVLaborMatTotal)
                  ? "TIME AND MATERIAL TOTAL : " + 0
                  : "TIME AND MATERIAL TOTAL :  $ " + PVLaborMatTotal
              }
            />
          </div>
        </div>
      </Form>
    </>
  );
};
export default UpdatePrevailingWage;
