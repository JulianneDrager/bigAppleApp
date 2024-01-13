import { Form, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewMenAndHours = ({ finalTotal }) => {
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

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/labor/getLaborInfo`,
    })
      .then(function (res) {
        setStraightTime(res.data.map((a) => a.straightTime));
        setOvertime(res.data.map((a) => a.overtime));
        setOvertimeHours(res.data.map((a) => a.overtimeHours));
        setPrevailingWage(res.data.map((a) => a.prevailingWage));
        setPrevailingWageHours(res.data.map((a) => a.prevailingWageHours));
        setPrevailingWageDays(res.data.map((a) => a.prevailingWageDays));

        setNumberOfMen(res.data.map((r) => r.numberOfMen));
        setHoursOfWork(res.data.map((r) => r.hoursOfWork));
        setNumberOfDays(res.data.map((r) => r.numberOfDays));
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  }, [setNumberOfMen, setHoursOfWork, setPrice]);

  // allows for the last array element to show in review file
  const straightTimeResult = straightTime.slice(-1)[0];
  const overtimeResult = overtime.slice(-1)[0];
  const overtimeHoursResult = overtimeHours.slice(-1)[0];
  const prevailingWageResult = prevailingWage.slice(-1)[0];
  const prevailingWageHoursResult = prevailingWageHours.slice(-1)[0];
  const prevailingWageDaysResult = prevailingWageDays.slice(-1)[0];
  // console.log(prevailingWageDaysResult);

  const numberOfMenResult = numberOfMen.slice(-1)[0];
  const numberOfDaysResult = numberOfDays.slice(-1)[0];
  const hoursOfWorkResult = hoursOfWork.slice(-1)[0];

  // CALCULATIONS FOR TIME TYPES ---------------------------------------------------

  // STRAIGHT TIME
  // hours only-no days worked * 200 hour rate
  const straightTimeOnlyHours = parseInt(hoursOfWorkResult) * 200;
  // days worked * 8/hrs
  const straightTimeDay = parseInt(numberOfDaysResult) * 8;
  // hours worked * $200 hour rate
  const straightTimeHours = parseInt(straightTimeDay) * 200;
  // hours worked * hour rate * number of men working
  const STtimeHoursTotal =
    parseInt(straightTimeOnlyHours) + parseInt(straightTimeHours);
  const STtotal = parseInt(STtimeHoursTotal) * parseInt(numberOfMenResult);

  // straight time labor/material cost
  const laborPlusMaterialTotal = parseInt(STtotal) + parseInt(finalTotal);

  // OVERTIME ---------------------------------------------------------------------
  // OT hours * hour rate of $200 * 1.5
  const OTHours = parseInt(overtimeHoursResult) * 200 * 1.5;
  // hour rate total @ 1.5 * men
  const OTtotalAndNumbOfMen = parseInt(OTHours) * parseInt(numberOfMenResult);
  // hour rate total @ 1.5 * men + default 8 hr day
  const OTtotal = parseInt(OTtotalAndNumbOfMen);

  // overtime time labor/material cost
  const OTLaborPlusMaterialTotal = parseInt(OTtotal) + parseInt(finalTotal);

  // STRAIGHT TIME + OVERTIME -----------------------------------------------------
  // days worked * 8/hrs
  const STDays = parseInt(numberOfDaysResult) * 8 * 200; // 8 * 200
  const STHours = parseInt(hoursOfWorkResult) * 200;
  const OTTHours = parseInt(overtimeHoursResult) * 200 * 1.5;
  const addOTAndST = parseInt(STDays) + STHours + OTTHours;
  const OTSTtotal = parseInt(addOTAndST) * numberOfMenResult;

  // straight and overtime labor/material cost
  const OTandStraightHoursTotal = parseInt(OTSTtotal) + parseInt(finalTotal);

  // PREVAILING WAGE --------------------------------------------------------------
  // 8/hr day worked * 400 hour rate
  const PVHoursDayHours = parseInt(prevailingWageDaysResult) * 8 * 400;
  // hours only-no days worked * 400 hour rate
  const PVHoursOnly = parseInt(prevailingWageHoursResult) * 400;
  // 8/hr day worked * 400 hour rate + hours only * 400 * 2
  const PVHrsTotal = parseInt(PVHoursDayHours) + parseInt(PVHoursOnly);
  // adding days and hours
  const PVTotal = parseInt(PVHrsTotal) * parseInt(numberOfMenResult);

  // prevailing wage time labor/material cost
  const PVLaborPlusMaterialTotal = parseInt(PVTotal) + parseInt(finalTotal);

  // console.log(PVHoursDayHours + PVHoursOnly);

  // -------------------------------------------------------------------------------

  // this section is reused in all sections below --- ------------------
  const straightTimeInputs = (
    <>
      {straightTimeResult && (
        <>
          {numberOfDaysResult === 0 && (
            <>
              <Form.Text>DAYS: * 1 day = 8 hrs</Form.Text>
              <Form.Control value={numberOfDaysResult + " days"} />
              <Form.Text>HOURS: * Straight time</Form.Text>
              <Form.Control value={hoursOfWorkResult + " hours"} />
            </>
          )}
          {numberOfDaysResult === 1 && (
            <>
              <Form.Text>DAYS: * 1 day = 8 hrs</Form.Text>
              <Form.Control value={numberOfDaysResult + " day"} />
              <Form.Text>HOURS: * Straight time</Form.Text>
              <Form.Control value={hoursOfWorkResult + " hours"} />
            </>
          )}
          {numberOfDaysResult > 1 && (
            <>
              <Form.Text>DAYS: * 1 day = 8 hrs</Form.Text>
              <Form.Control value={numberOfDaysResult + " days"} />
              <Form.Text>HOURS: * Straight time</Form.Text>
              <Form.Control value={hoursOfWorkResult + " hours"} />
            </>
          )}
        </>
      )}
    </>
  );
  // --------------------------------------------------------------------

  // styles

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

  return (
    <>
      <div style={laborDiv}>
        <Form.Label>
          <h3>LABOR: </h3>
        </Form.Label>
      </div>
      <div style={container}>
        {/* REVIEW TYPE -- shows or hides labor time type ----*/}
        <Col>
          <Form.Label>TYPE OF LABOR: </Form.Label>
          <Form.Control
            style={{ display: straightTimeResult ? "block" : "none" }}
            value={straightTimeResult ? "Straight Time" : "n/a"}
          />
          <hr style={{ margin: ".3rem", border: "0" }} />
          <Form.Control
            style={{ display: overtimeResult ? "block" : "none" }}
            value={overtimeResult ? "Overtime" : "n/a"}
          />
          <hr style={{ margin: ".3rem", border: "0" }} />
          <Form.Control
            style={{ display: prevailingWageResult ? "block" : "none" }}
            value={prevailingWageResult ? "Prevailing Wage" : "n/a"}
          />
        </Col>
      </div>
      {/* --------------------------------------------------- */}

      <div style={menHoursDiv}>
        {/* REVIEW MEN AND HOURS ------------------------------------------*/}
        <Col>
          {/* STRAIGHT TIME: NOTE:only shows here if selected*/}
          {straightTimeResult && !overtimeResult && straightTimeInputs}

          {/* OVERTIME HOURS: NOTE: incl. straight time  -----------*/}
          {overtimeResult && !straightTimeResult && (
            <>
              {straightTimeInputs}
              <Form.Text>HOURS: * Overtime </Form.Text>
              <Form.Control value={overtimeHoursResult + " hours"} />
            </>
          )}
          {overtimeResult && straightTimeResult && (
            <>
              {straightTimeInputs}
              <Form.Text>HOURS: * Overtime </Form.Text>
              <Form.Control value={overtimeHoursResult + " hours"} />
              <br />
            </>
          )}

          {/* PREVAILING WAGE: NOTE: incl. straight time  ----*/}
          {prevailingWageResult && (
            <>
              {straightTimeInputs}
              <Form.Text>* Prevailing Wage Days: 1 day = 8 hrs </Form.Text>

              {prevailingWageDaysResult === 0 && (
                <Form.Control value={prevailingWageDaysResult + " days"} />
              )}

              {prevailingWageDaysResult === 1 && (
                <Form.Control value={prevailingWageDaysResult + " day"} />
              )}
              {prevailingWageDaysResult > 1 && (
                <Form.Control value={prevailingWageDaysResult + " days"} />
              )}

              <Form.Text>*Prevailing Wage Hours </Form.Text>
              <Form.Control value={prevailingWageHoursResult + " hours"} />
            </>
          )}

          {/* NUMBER OF MEN ----------------------------------*/}
          {straightTimeResult && !overtimeResult && (
            <Form.Text>* $200/hr per man</Form.Text>
          )}
          {!straightTimeResult && overtimeResult && (
            <Form.Text>* $200 * 1.5/hr per man </Form.Text>
          )}
          {straightTimeResult && overtimeResult && (
            <Form.Text>* $200/hr per man + OT hrs</Form.Text>
          )}
          {prevailingWageResult && <Form.Text>* $400/hr per man</Form.Text>}
          <Form.Control value={numberOfMenResult + " men"} />

          {/* shows/hides input with straight time info ------*/}
          {straightTimeResult < 0 && (
            <Form.Control value={hoursOfWorkResult + " hours"} />
          )}
        </Col>
        <br />
        <Col>
          <Form.Label>TOTAL:</Form.Label>
          {straightTimeResult && !overtimeResult && (
            <Form.Control value={"$ " + STtotal} />
          )}
          {overtimeResult && !straightTimeResult && (
            <Form.Control value={"$ " + OTtotal} />
          )}

          {straightTimeResult && overtimeResult && (
            <Form.Control value={"$ " + OTSTtotal} />
          )}

          {prevailingWageResult && <Form.Control value={"$ " + PVTotal} />}
        </Col>
        <br />
      </div>
      {/* FINIAL TOTALS WITH HOURS AND MATERIAL ---------------*/}
      <div
        style={{
          backgroundColor: "#a8a5a5",
          padding: "1rem",
        }}
      >
        {straightTimeResult && !overtimeResult && (
          <Form.Control
            style={{ textAlign: "right", fontSize: "1.5rem" }}
            value={"FINIAL TOTAL $" + laborPlusMaterialTotal}
          />
        )}

        {overtimeResult && !straightTimeResult && (
          <Form.Control
            style={{ textAlign: "right", fontSize: "1.5rem" }}
            value={"FINIAL TOTAL $" + OTLaborPlusMaterialTotal}
          />
        )}

        {straightTimeResult && overtimeResult && (
          <Form.Control
            style={{ textAlign: "right", fontSize: "1.5rem" }}
            value={"FINIAL TOTAL $" + OTandStraightHoursTotal}
          />
        )}

        {prevailingWageResult && (
          <Form.Control
            style={{ textAlign: "right", fontSize: "1.5rem" }}
            value={"FINIAL TOTAL $" + PVLaborPlusMaterialTotal}
          />
        )}
      </div>

      {/* 1600 + 1500 */}
    </>
  );
};
export default ReviewMenAndHours;
