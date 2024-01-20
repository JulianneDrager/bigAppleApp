import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateOvertime = () => {
  const [overtime, setOvertime] = useState("");
  const [overtimeHours, setOvertimeHours] = useState("");

  const [numberOfMen, setNumberOfMen] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/labor/getLabor/${id}`,
    })
      .then(function (res) {
        setOvertime(res.data.overtime);
        setOvertimeHours(res.data.overtimeHours || 0);
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
        numberOfMen: numberOfMen,
        overtime: overtime,
        overtimeHours: overtimeHours,
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
  // OVERTIME ---------------------------------------------------------------------
  // OT hours * hour rate of $200 * 1.5
  const OTHours = parseInt(overtimeHours) * 200 * 1.5;
  // hour rate total @ 1.5 * men
  const OTtotalAndNumbOfMen = parseInt(OTHours) * parseInt(numberOfMen);
  // hour rate total @ 1.5 * men + default 8 hr day
  const OTtotal = parseInt(OTtotalAndNumbOfMen);

  // overtime time labor/material cost
  const OTLaborMatTotal = parseInt(OTtotal);

  return (
    <>
      <Form action="labor/update/:id" method="post" onSubmit={updateHandler}>
        <div style={laborDiv}>
          {/* KEY --------------------------------------------------------- */}
          <div style={keyStyle}>
            <h3 style={{ margin: "0 0 1rem 0" }}>
              UPDATE: OVERTIME TIME LABOR
            </h3>
            <p>
              <b>
                KEY
                <br />
              </b>
              PAY: $200 x 1.5/HR PER MAN
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
            <Form.Label style={{ width: "5rem" }}>HRS:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Number of Hours"
              style={inputStyle}
              value={overtimeHours}
              onChange={(e) => setOvertimeHours(e.target.value)}
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
                isNaN(OTLaborMatTotal)
                  ? "TIME AND MATERIAL TOTAL : " + 0
                  : "TIME AND MATERIAL TOTAL :  $ " + OTLaborMatTotal
              }
            />
          </div>
        </div>
      </Form>
    </>
  );
};
export default UpdateOvertime;
