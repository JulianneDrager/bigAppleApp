import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Image } from "react-bootstrap";
import NumberOfMen from "./Men/NumberOfMen";
import NumberOfHours from "./Hours/NumberOfHours";
import LaborType from "./Type/LaborType";

const Labor = () => {
  const [numberOfMen, setNumberOfMen] = useState(0);
  const [hoursOfWork, setHoursOfWork] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [price, setPrice] = useState("");

  const [straightTime, setStraightTime] = useState(false);
  const [overtime, setOvertime] = useState(false);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [prevailingWage, setPrevailingWage] = useState(false);
  const [prevailingWageHours, setPrevailingWageHours] = useState(0);
  const [prevailingWageDays, setPrevailingWageDays] = useState(0);

  const navigate = useNavigate();
  const refForm = useRef();

  const sendFormHandler = (e) => {
    e.preventDefault();
    // axios request
    axios({
      method: "POST",
      url: "http://localhost:5000/labor/createLabor",
      headers: { "Content-Type": "application/json" },
      data: {
        numberOfMen: numberOfMen,
        numberOfDays: numberOfDays,
        hoursOfWork: hoursOfWork,

        straightTime: straightTime,
        overtime: overtime,
        overtimeHours: overtimeHours,
        prevailingWage: prevailingWage,
        prevailingWageHours,
        prevailingWageDays,

        price: price,
      },
    }).then(function (response) {
      navigate("/review");
      console.log("res", response.data);
    });
  };

  const appleLink =
    "https://img1.wsimg.com/isteam/ip/6bb49086-ab23-4f12-abed-6e3e159532d0/logo/header.JPG/:/rs=h:160,cg:true,m/qt=q:95";

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Image
          src={appleLink}
          className="img-fluid"
          style={{
            padding: "0 0 1rem 0",
            margin: "0 auto",
          }}
        />
      </div>
      <Form
        id=""
        ref={refForm}
        onSubmit={sendFormHandler}
        // className={form}
        autoComplete="on"
      >
        <NumberOfMen
          numberOfMen={numberOfMen}
          setNumberOfMen={setNumberOfMen}
        />

        <hr />
        <LaborType
          straightTime={straightTime}
          setStraightTime={setStraightTime}
          overtime={overtime}
          setOvertime={setOvertime}
          overtimeHours={overtimeHours}
          setOvertimeHours={setOvertimeHours}
          prevailingWage={prevailingWage}
          setPrevailingWage={setPrevailingWage}
          prevailingWageDays={prevailingWageDays}
          setPrevailingWageDays={setPrevailingWageDays}
          prevailingWageHours={prevailingWageHours}
          setPrevailingWageHours={setPrevailingWageHours}
          hoursOfWork={hoursOfWork}
          setHoursOfWork={setHoursOfWork}
          numberOfDays={numberOfDays}
          setNumberOfDays={setNumberOfDays}
        />
        <hr />
        <Button type="submit" value="send">
          SAVE
        </Button>
      </Form>
    </>
  );
};
export default Labor;
