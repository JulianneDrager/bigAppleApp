import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewPV = ({
  idResult,
  prevailingWageDaysResult,
  prevailingWageHoursResult,
  numberOfMenResult,
  totLaborPV,
  setTotLaborPV,
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

  // CALCULATIONS FOR TIME TYPES --------------------------------------------------
  // PREVAILING WAGE --------------------------------------------------------------
  // 8/hr day worked * 400 hour rate
  const PVHoursDayHours = parseInt(prevailingWageDaysResult) * 8 * 400;
  // hours only-no days worked * 400 hour rate
  const PVHoursOnly = parseInt(prevailingWageHoursResult) * 400;
  // 8/hr day worked * 400 hour rate + hours only * 400 * 2
  const PVHrsTotal = parseInt(PVHoursDayHours) + parseInt(PVHoursOnly);
  // adding days and hours
  const PVTotal = parseInt(PVHrsTotal) * parseInt(numberOfMenResult);
  setTotLaborPV(PVTotal);

  // -------------------------------------------------------------------------------

  return (
    <>
      <br />
      <div style={laborDiv}>
        {/* KEY --------------------------------------------------------- */}

        <h3 style={{ margin: "0 0 1rem 0" }}>LABOR: PREVAILING WAGE</h3>
        <div style={keyStyle}>
          <p>
            <b>
              KEY
              <br />
            </b>
            PAY: $400/HR PER MAN <br /> DAYS: 1 DAY = 8/HRS
          </p>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div style={menHoursDiv}>
        <br />
        {/* REVIEW MEN AND HOURS ------------------------------------------*/}
        {/* PREVAILING WAGE: NOTE: incl. straight time  ----*/}
        <div style={inputDiv}>
          <>
            <Form.Label>DAYS: </Form.Label>
            <Form.Control style={DayInput} value={prevailingWageDaysResult} />
          </>
        </div>

        <div style={inputDiv}>
          <Form.Label>HRS:</Form.Label>
          <Form.Control style={HrInput} value={prevailingWageHoursResult} />
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

          <Form.Control style={TotalInput} value={"$" + PVTotal} />
        </div>

        <Link style={linkStyle} type="submit" to={`/UpdatePvLabor/${idResult}`}>
          EDIT
        </Link>
      </div>
    </>
  );
};
export default ReviewPV;
