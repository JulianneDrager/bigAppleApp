import React from "react";
import General from "./Components/General/General";
import { Image } from "react-bootstrap";
const Screen = () => {
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
      <General />
    </>
  );
};
export default Screen;
