import { Form, Col, Button, Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import NumberOfHours from "../../../Labor/Hours/NumberOfHours";

const ReviewMenAndHours = () => {
  const [straightTime, setStraightTime] = useState([]);
  const [overtime, setOvertime] = useState([]);
  const [overtimeHours, setOvertimeHours] = useState("");
  const [prevailingWage, setPrevailingWage] = useState([]);
  const [prevailingWageHours, setPrevailingWageHours] = useState([]);
  const [prevailingWageDays, setPrevailingWageDays] = useState([]);

  const [numberOfMen, setNumberOfMen] = useState("");
  const [hoursOfWork, setHoursOfWork] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/labor/getLabor/${id}`,
    })
      .then(function (res) {
        setStraightTime(res.data.straightTime);
        setOvertime(res.data.overtime);
        setOvertimeHours(res.data.overtimeHours);
        setPrevailingWage(res.data.prevailingWage);
        setPrevailingWageHours(res.data.prevailingWageHours);
        setPrevailingWageDays(res.data.prevailingWageDays);
        setNumberOfMen(res.data.numberOfMen);
        setHoursOfWork(res.data.hoursOfWork);
        setNumberOfDays(res.data.numberOfDays);
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
        overtime: overtime,
        overtimeHours: overtimeHours,
        prevailingWage: prevailingWage,
        prevailingWageHours: prevailingWageHours,
        prevailingWageDays: prevailingWageDays,

        // },
      },
    }).then((res) => {
      console.log("RES", res);
      // console.log("QTY", teeBQty);
      navigate("/review");
    });
  };

  // styles -----------------------------------------------------
  const laborDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const container = {
    backgroundColor: "lightGray",
    padding: "1rem",
    display: "flex",
  };

  const menHoursDiv = {
    backgroundColor: "lightGray",
    padding: "0 1rem",
  };

  // CALCULATIONS FOR TIME TYPES ---------------------------------------------------

  // STRAIGHT TIME
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

  // OVERTIME ---------------------------------------------------------------------
  // OT hours * hour rate of $200 * 1.5
  const OTHours = parseInt(overtimeHours) * 200 * 1.5;
  // hour rate total @ 1.5 * men
  const OTtotalAndNumbOfMen = parseInt(OTHours) * parseInt(numberOfMen);
  // hour rate total @ 1.5 * men + default 8 hr day
  const OTtotal = parseInt(OTtotalAndNumbOfMen);

  // overtime time labor/material cost
  const OTLaborPlusMaterialTotal = parseInt(OTtotal);

  // STRAIGHT TIME + OVERTIME -----------------------------------------------------
  // days worked * 8/hrs
  const STDays = parseInt(numberOfDays) * 8 * 200; // 8 * 200
  const STHours = parseInt(hoursOfWork) * 200;
  const OTTHours = parseInt(overtimeHours) * 200 * 1.5;
  const addOTAndST = parseInt(STDays) + STHours + OTTHours;
  const OTSTtotal = parseInt(addOTAndST) * numberOfMen;

  // straight and overtime labor/material cost
  const OTandStraightHoursTotal = parseInt(OTSTtotal);

  // PREVAILING WAGE --------------------------------------------------------------
  // 8/hr day worked * 400 hour rate
  const PVHoursDayHours = parseInt(prevailingWageDays) * 8 * 400;
  // hours only-no days worked * 400 hour rate
  const PVHoursOnly = parseInt(prevailingWageHours) * 400;
  // 8/hr day worked * 400 hour rate + hours only * 400 * 2
  const PVHrsTotal = parseInt(PVHoursDayHours) + parseInt(PVHoursOnly);
  // adding days and hours
  const PVTotal = parseInt(PVHrsTotal) * parseInt(numberOfMen);

  // prevailing wage time labor/material cost
  const PVLaborPlusMaterialTotal = parseInt(PVTotal);

  // console.log(PVHoursDayHours + PVHoursOnly);

  // PREVAILING WAGE AND STRAIGHT TIME  --------------------------------------------
  const addSTSH = STDays + STHours; // 13/hr @200 = 2600
  const PVSTTOtal = addSTSH + PVHrsTotal + OTTHours; // 2600 + 3200 = 5800
  const PVSTSHTotal = parseInt(PVSTTOtal) * parseInt(numberOfMen);

  const PVSTSHPlusMaterialTotal = parseInt(PVSTSHTotal);

  console.log(PVSTTOtal);

  // -------------------------------------------------------------------------------

  return (
    <>
      <Form action="labor/update/:id" method="post" onSubmit={updateHandler}>
        <div style={laborDiv}>
          <Form.Label>
            <h3>LABOR: </h3>
          </Form.Label>

          <br />
          <Form.Text>Number Of Men</Form.Text>
          {/* NUMBER OF MEN ------------------------------------------------------- */}
          <Form.Control
            as="textarea"
            placeholder="Enter Number of Men"
            style={{ height: "50px" }}
            value={numberOfMen}
            onChange={(e) => setNumberOfMen(e.target.value)}
          />

          <br />
          <Form.Label>TYPE OF LABOR </Form.Label>
          <br />

          <Form.Label>STRAIGHT TIME: </Form.Label>
          {straightTime && (
            <>
              <Form.Text> *NOTE: 1 day = 8/hrs</Form.Text>
              <Form.Control
                as="textarea"
                placeholder="Enter Number of Days"
                style={{ height: "50px" }}
                value={numberOfDays}
                onChange={(e) => setNumberOfDays(e.target.value)}
              />
              <Form.Control
                as="textarea"
                placeholder="Enter Number of Hours"
                style={{ height: "50px" }}
                value={hoursOfWork}
                onChange={(e) => setHoursOfWork(e.target.value)}
              />
            </>
          )}
          <br />
          <Form.Label>OVERTIME: </Form.Label>
          {overtime && (
            <Form.Control
              placeholder="Enter Overtime Hours"
              value={overtimeHours}
              onChange={(e) => setOvertimeHours(e.target.value)}
            />
          )}
          <br />
          <Form.Label>PREVAILING WAGE: </Form.Label>
          {prevailingWage && (
            <>
              <Form.Text> *NOTE: 1 day = 8/hrs</Form.Text>
              <Form.Control
                as="textarea"
                placeholder="Enter Number of Days"
                style={{ height: "50px" }}
                value={prevailingWageDays}
                onChange={(e) => setPrevailingWageDays(e.target.value)}
              />
              <Form.Control
                as="textarea"
                placeholder="Enter Number of Hours"
                style={{ height: "50px" }}
                value={prevailingWageHours}
                onChange={(e) => setPrevailingWageHours(e.target.value)}
              />
            </>
          )}
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
            {straightTime && !overtime && !prevailingWage && (
              <Form.Control
                style={{ textAlign: "right", fontSize: "1.5rem" }}
                value={
                  "TIME AND MATERIAL TOTAL :  $e " + laborPlusMaterialTotal
                }
              />
            )}

            {overtime && !straightTime && (
              <Form.Control
                style={{ textAlign: "right", fontSize: "1.5rem" }}
                value={
                  "TIME AND MATERIAL TOTAL :  $d " + OTLaborPlusMaterialTotal
                }
              />
            )}

            {straightTime && overtime && !prevailingWage && (
              <Form.Control
                style={{ textAlign: "right", fontSize: "1.5rem" }}
                value={
                  "TIME AND MATERIAL TOTAL :  $c " + OTandStraightHoursTotal
                }
              />
            )}

            {prevailingWage && straightTime && (
              <Form.Control
                style={{ textAlign: "right", fontSize: "1.5rem" }}
                value={
                  "TIME AND MATERIAL TOTAL :  $b " + PVSTSHPlusMaterialTotal
                }
              />
            )}

            {prevailingWage && !straightTime && !overtime && (
              <Form.Control
                style={{ textAlign: "right", fontSize: "1.5rem" }}
                value={
                  "TIME AND MATERIAL TOTAL :  $a " + PVLaborPlusMaterialTotal
                }
              />
            )}
          </div>
        </div>
      </Form>

      {/* 1600 + 1500 */}
    </>
  );
};
export default ReviewMenAndHours;
