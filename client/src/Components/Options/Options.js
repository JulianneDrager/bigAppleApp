import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeOfBuildingStatic from "./TypeOfBuilding/TypeOfBuildingStatic";
import TypeOfSystemStatic from "./TypeOfSystem/TypeOfSystemStatic";
import { Button, Form, Image } from "react-bootstrap";
import axios from "axios";
import Signage from "./Signage/Signage";

const Options = () => {
  const [centralStation, setCentralStation] = useState(false);
  const [firePump, setFirePump] = useState(false);
  const [jockeyPump, setJockeyPump] = useState(false);
  const [localPump, setLocalPump] = useState(false);

  const [combo, setCombo] = useState(false);
  const [sprinkler, setSprinkler] = useState(false);
  const [standPipe, setStandPipe] = useState(false);

  const [comboCurbBox, setComboCurbBox] = useState(false);
  const [comboLocation, setComboLocation] = useState(false);
  const [callFDNY, setCallFDNY] = useState(false);

  const navigate = useNavigate();

  const sendForm = (e) => {
    e.preventDefault();
    // axios request
    axios({
      method: "POST",
      url: "http://localhost:5000/options/createOptions",
      headers: { "Content-Type": "application/json" },
      data: {
        centralStation: centralStation,
        firePump: firePump,
        jockeyPump: jockeyPump,
        localPump: localPump,
        combo: combo,
        sprinkler: sprinkler,
        standPipe: standPipe,
        comboCurbBox: comboCurbBox,
        comboLocation: comboLocation,
        callFDNY: callFDNY,
      },
    }).then(function (response) {
      console.log("res", response.data);
      navigate("/materials");
    });
  };

  const refForm = useRef();

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
      <div>
        <Form id="contact" ref={refForm} onSubmit={sendForm} autoComplete="on">
          <TypeOfBuildingStatic
            centralStation={centralStation}
            setCentralStation={setCentralStation}
            firePump={firePump}
            setFirePump={setFirePump}
            jockeyPump={jockeyPump}
            setJockeyPump={setJockeyPump}
            localPump={localPump}
            setLocalPump={setLocalPump}
          />
          <TypeOfSystemStatic
            combo={combo}
            setCombo={setCombo}
            sprinkler={sprinkler}
            setSprinkler={setSprinkler}
            standPipe={standPipe}
            setStandPipe={setStandPipe}
          />

          <Signage
            comboCurbBox={comboCurbBox}
            setComboCurbBox={setComboCurbBox}
            comboLocation={comboLocation}
            setComboLocation={setComboLocation}
            callFDNY={callFDNY}
            setCallFDNY={setCallFDNY}
          />

          <Button type="submit" value="send">
            SAVE
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Options;
