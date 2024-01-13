import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export const ReviewContext = createContext();

export const ReviewProvider = (props) => {
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

  return (
    <>
      <ReviewContext.Provider
        value={[
          straightTime,
          setStraightTime,
          overtime,
          setOvertime,
          overtimeHours,
          setOvertimeHours,
          prevailingWage,
          setPrevailingWage,
          prevailingWageHours,
          setPrevailingWageHours,
          prevailingWageDays,
          setPrevailingWageDays,
          numberOfMen,
          setNumberOfMen,
          hoursOfWork,
          setHoursOfWork,
          numberOfDays,
          setNumberOfDays,
          price,
          setPrice,
        ]}
      >
        {props.children}
      </ReviewContext.Provider>
    </>
  );
};
