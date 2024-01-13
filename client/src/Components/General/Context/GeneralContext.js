import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export const GeneralContext = createContext();

export const GeneralProvider = (props) => {
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [notes, setNotes] = useState("");

  const [reqBy, setReqBy] = useState("");
  const [management, setManagement] = useState("");
  const [fdnyTest, setFdnyTest] = useState("");

  const [violation, setViolation] = useState(true);

  const [violationDate, setViolationDate] = useState("");
  const [estimateDate, setEstimateDate] = useState("");

  const sendFormHandler = (e) => {
    e.preventDefault();
    // axios request
    axios({
      method: "POST",
      url: "http://localhost:5000/general/createGeneral",
      headers: { "Content-Type": "application/json" },
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
        // changes mongos UTC format to Month, Date, year via "moment" library
        fdnyTest: moment(fdnyTest).format(" MMMM dddd DD YYYY"),
        violationDate: moment(violationDate).format(" MMMM dddd DD YYYY"),
        estimateDate: moment(estimateDate).format(" MMMM dddd DD YYYY"),
        violation: violation,
      },
    }).then(function (response) {
      navigate("/options");
      // `/review/${number}/${phone}/${name}/${street}/${city}/${zipcode}/${reqBy}/${management}/${fdnyTest}/${violationDate}/${estimateDate}/${violation}/`
      console.log("res", response.data);
    });
  };

  return (
    <>
      <GeneralContext.Provider
        value={[
          number,
          setNumber,
          phone,
          setPhone,
          name,
          setName,
          street,
          setStreet,
          city,
          setCity,
          zipcode,
          setZipCode,
          notes,
          setNotes,
          reqBy,
          setReqBy,
          management,
          setManagement,
          fdnyTest,
          setFdnyTest,
          violation,
          setViolation,
          violationDate,
          setViolationDate,
          estimateDate,
          setEstimateDate,
          sendFormHandler,
        ]}
      >
        {props.children}
      </GeneralContext.Provider>
    </>
  );
};
