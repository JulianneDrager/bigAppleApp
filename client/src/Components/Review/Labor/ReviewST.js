import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewST = ({
  idResult,
  straightTimeResult,
  numberOfMenResult,
  numberOfDaysResult,
  hoursOfWorkResult,
  totLaborST,
  setTotLaborST,
}) => {
  // styles -----------------------------------------------------------------------
  const laborDiv = {
    padding: ".5rem .5rem 0 .5rem ",
    backgroundColor: "lightGray",
  };

  const menHoursDiv = {
    backgroundColor: "lightGray",
    padding: "0 1rem",
  };

  const linkStyle = {
    display: "block",
    backgroundColor: "lightGray",
    textAlignLast: "end",
  };

  const keyStyle = {
    padding: ".5rem",
    color: "white",
    backgroundColor: "#8a8989b8",
    borderRadius: ".2rem",
  };

  const inputDiv = { display: "flex", alignItems: "center" };
  const DayInput = { margin: "0 0 0 .5rem" };
  const MenInput = { margin: "0 0 0 .6rem" };
  const HrInput = { margin: "0 0 0 1rem" };
  const TotalInput = { margin: "0 0 0 2rem" };

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
  setTotLaborST(STtotal);

  // console.log(straightTimeResult);

  // -------------------------------------------------------------------------------

  return (
    <>
      <div style={laborDiv}>
        {/* KEY --------------------------------------------------------- */}

        <h3 style={{ margin: "0 0 1rem 0" }}>LABOR: STRAIGHT TIME</h3>
        <div style={keyStyle}>
          <p>
            <b>
              KEY
              <br />
            </b>
            PAY: $200/HR PER MAN <br /> DAYS: 1 DAY = 8/HRS
          </p>
        </div>
      </div>

      <div style={menHoursDiv}>
        <br />
        {/* REVIEW MEN AND HOURS ------------------------------------------*/}
        {/* STRAIGHT TIME: ------------------------------------------------*/}
        <div style={inputDiv}>
          <>
            <Form.Label>DAYS: </Form.Label>
            <Form.Control style={DayInput} value={numberOfDaysResult} />
          </>
        </div>

        <div style={inputDiv}>
          <Form.Label>HRS:</Form.Label>
          <Form.Control style={HrInput} value={hoursOfWorkResult} />
        </div>
        <br />

        {/* NUMBER OF MEN ----------------------------------*/}
        <div style={inputDiv}>
          <Form.Label>MEN:</Form.Label>
          <Form.Control style={MenInput} value={numberOfMenResult} />
        </div>
        <br />

        <div style={inputDiv}>
          <Form.Label style={{ width: "15rem" }}>LABOR TOTAL:</Form.Label>
          {STtotal > 0 && (
            <Form.Control style={TotalInput} value={"$ " + STtotal} />
          )}
        </div>

        <Link style={linkStyle} type="submit" to={`/UpdateStLabor/${idResult}`}>
          EDIT
        </Link>
        <br />
      </div>
    </>
  );
};
export default ReviewST;
