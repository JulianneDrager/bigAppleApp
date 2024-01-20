import ReviewPV from "./ReviewPV";
import ReviewOT from "./ReviewOT";
import ReviewST from "./ReviewST";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const ReviewLabor = ({
  totLaborST,
  setTotLaborST,
  totLaborOT,
  setTotLaborOT,
  totLaborPV,
  setTotLaborPV,
  setPrice,
  finalTotal,
}) => {
  const [straightTime, setStraightTime] = useState([]);

  const [overtime, setOvertime] = useState([]);
  const [overtimeHours, setOvertimeHours] = useState("");

  const [prevailingWage, setPrevailingWage] = useState([]);
  const [prevailingWageHours, setPrevailingWageHours] = useState([]);
  const [prevailingWageDays, setPrevailingWageDays] = useState([]);

  const [numberOfMen, setNumberOfMen] = useState("");
  const [hoursOfWork, setHoursOfWork] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [id, setId] = useState("");

  // allows for the last array element to show in review file
  const idResult = id.slice(-1)[0];
  const straightTimeResult = straightTime.slice(-1)[0];

  const overtimeHoursResult = overtimeHours.slice(-1)[0];

  const prevailingWageHoursResult = prevailingWageHours.slice(-1)[0];
  const prevailingWageDaysResult = prevailingWageDays.slice(-1)[0];

  // straight time --------------------------------------------------
  const numberOfDaysResult = numberOfDays.slice(-1)[0];
  const hoursOfWorkResult = hoursOfWork.slice(-1)[0];
  // ----------------------------------------------------------------
  const numberOfMenResult = numberOfMen.slice(-1)[0];

  // checking if days + hrs is zero ----------------------------------------
  const sumUpST = parseInt(numberOfDaysResult) + parseInt(hoursOfWorkResult);
  const sumUpPV =
    parseInt(prevailingWageDaysResult) + parseInt(prevailingWageHoursResult);
  const sumUpAll = sumUpST + sumUpPV + parseInt(overtimeHoursResult);

  console.log("test", sumUpPV);

  // ----------------------------------------------------------------

  // add totals -----------------------------------------------------
  const addAll =
    parseInt(totLaborST) +
    parseInt(totLaborOT) +
    parseInt(totLaborPV) +
    parseInt(finalTotal);

  // ----------------------------------------------------------------

  const zeroPV = setTotLaborPV(totLaborPV || 0);
  const zeroOT = setTotLaborOT(totLaborOT || 0);
  const zeroSt = setTotLaborST(totLaborST || 0);

  const addZero =
    parseInt(totLaborST) + parseInt(totLaborOT) + parseInt(totLaborPV);

  // console.log("add all", addZero);

  useEffect(
    (e) => {
      axios({
        method: "GET",
        url: `http://localhost:5000/labor/getLaborInfo`,
      })
        .then(function (res) {
          setStraightTime(res.data.map((a) => a.straightTime));

          setOvertime(res.data.map((a) => a.overtime));
          setOvertimeHours(res.data.map((a) => a.overtimeHours || 0));

          setPrevailingWage(res.data.map((a) => a.prevailingWage));
          setPrevailingWageHours(
            res.data.map((a) => a.prevailingWageHours || 0)
          );
          setPrevailingWageDays(res.data.map((a) => a.prevailingWageDays || 0));

          setNumberOfMen(res.data.map((r) => r.numberOfMen || 0));
          setHoursOfWork(res.data.map((r) => r.hoursOfWork || 0));
          setNumberOfDays(res.data.map((r) => r.numberOfDays || 0));
          setId(res.data.map((r) => r._id));
        })
        .catch((err) => {
          console.log("axios error", err);
        });
    },
    [setNumberOfMen, setHoursOfWork, setPrice]
  );

  // style ----------------------------------------------------------------
  const btnStyle = {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    padding: ".5rem",
    margin: "0 0 .5rem 0",
    fontSize: ".8rem",
    color: "white",
    backgroundColor: "#484c4b",
    width: "15rem",
    borderRadius: ".3rem",
  };

  const laborDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const totalDiv = {
    backgroundColor: "#a8a5a5",
    padding: "1rem",
  };

  return (
    <>
      <div style={laborDiv}>
        {sumUpAll === 0 && (
          <div>
            <h3 style={{ margin: "0 0 1rem 0" }}>LABOR HOURS</h3>
            NOTE: THERE ARE NO HOURS LISTED, YOUR TOTAL INCLUDES MATERIAL ONLY:
            <br /> PLEASE ADD ADDITIONAL HOURS BY SELECTING THE BUTTONS BELOW
            <hr />
          </div>
        )}

        {sumUpST !== 0 && (
          <ReviewST
            idResult={idResult}
            straightTimeResult={straightTimeResult}
            numberOfMenResult={numberOfMenResult}
            numberOfDaysResult={numberOfDaysResult}
            hoursOfWorkResult={hoursOfWorkResult}
            totLaborST={totLaborST}
            setTotLaborST={setTotLaborST}
            finalTotal={finalTotal}
          />
        )}
        {overtimeHoursResult !== 0 && (
          <ReviewOT
            idResult={idResult}
            overtimeHoursResult={overtimeHoursResult}
            numberOfMenResult={numberOfMenResult}
            totLaborOT={totLaborOT}
            setTotLaborOT={setTotLaborOT}
            finalTotal={finalTotal}
          />
        )}
        {sumUpPV !== 0 && (
          <ReviewPV
            idResult={idResult}
            prevailingWageHoursResult={prevailingWageHoursResult}
            prevailingWageDaysResult={prevailingWageDaysResult}
            numberOfMenResult={numberOfMenResult}
            totLaborPV={totLaborPV}
            setTotLaborPV={setTotLaborPV}
            finalTotal={finalTotal}
          />
        )}

        {/* OPTIONS BUTTONS ------------------------------------- */}
        {sumUpAll === 0 && (
          <div>
            ADD ADDITIONAL HOURS BELOW:
            <hr />
          </div>
        )}
        {sumUpST === 0 && (
          <div>
            <Link style={btnStyle} to={`/UpdateStLabor/${idResult}`}>
              ADD STRAIGHT TIME HOURS
            </Link>
          </div>
        )}
        {overtimeHoursResult === 0 && (
          <div>
            <Link style={btnStyle} to={`/UpdateOtLabor/${idResult}`}>
              ADD OVERTIME TIME HOURS{" "}
            </Link>
          </div>
        )}
        {sumUpPV === 0 && (
          <div>
            <Link style={btnStyle} to={`/UpdatePvLabor/${idResult}`}>
              ADD PREVAILING WAGE HOURS{" "}
            </Link>
          </div>
        )}

        {/* FINAL TOTAL MATERIAL/LABOR  */}
        {/* TIME AND MATERIAL TOTAL : WITH HOURS AND MATERIAL -------------------------*/}

        {/* adds all labor ----------------------------------------------------------- */}
        <div style={totalDiv}>
          {sumUpAll !== 0 && (
            <Form.Control
              style={{
                textAlign: "right",
                fontSize: "1.5rem",
              }}
              value={"TIME AND MATERIAL TOTAL : $ " + addAll}
            />
          )}
        </div>

        {/* adds ST labor------------------------------------------------------- */}
        {sumUpAll === 0 && (
          <div style={totalDiv}>
            <Form.Control
              style={{ textAlign: "right", fontSize: "1.5rem" }}
              value={"ONLY MATERIAL TOTAL :  $ " + finalTotal}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default ReviewLabor;
