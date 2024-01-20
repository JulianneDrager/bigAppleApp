import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewOT = ({
  idResult,
  overtimeHoursResult,
  numberOfMenResult,
  totLaborOT,
  setTotLaborOT,
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
    backgroundColor: "#8a8989",
    borderRadius: ".2rem",
  };
  const inputDiv = { display: "flex", alignItems: "center" };
  const MenInput = { margin: "0 0 0 .6rem" };
  const HrInput = { margin: "0 0 0 1rem" };
  const TotalInput = { margin: "0 0 0 2rem" };

  // CALCULATIONS FOR TIME TYPES ---------------------------------------------------

  // OT hours * hour rate of $200 * 1.5
  const OTHours = parseInt(overtimeHoursResult) * 200 * 1.5;
  // hour rate total @ 1.5 * men
  const OTtotalAndNumbOfMen = parseInt(OTHours) * parseInt(numberOfMenResult);
  // hour rate total @ 1.5 * men + default 8 hr day
  const OTtotal = parseInt(OTtotalAndNumbOfMen);
  setTotLaborOT(OTtotal);

  // -------------------------------------------------------------------------------

  return (
    <>
      <br />
      <div style={laborDiv}>
        {/* KEY --------------------------------------------------------- */}

        <h3 style={{ margin: "0 0 1rem 0" }}>LABOR: OVERTIME</h3>
        <div style={keyStyle}>
          <p>
            <b>
              KEY
              <br />
            </b>
            PAY: $200 x 1.5/HR PER MAN
          </p>
        </div>
        <br />
      </div>

      <div style={menHoursDiv}>
        {/* REVIEW MEN AND HOURS ------------------------------------------*/}
        {/* OVERTIME HOURS: NOTE: incl. straight time  -----------*/}
        <div style={inputDiv}>
          <>
            <Form.Label>HRS: </Form.Label>
            <Form.Control style={HrInput} value={overtimeHoursResult} />
          </>
        </div>
        {/* NUMBER OF MEN ----------------------------------*/}
        <div style={inputDiv}>
          <Form.Label>MEN:</Form.Label>
          <Form.Control style={MenInput} value={numberOfMenResult} />
        </div>
        <br />
        <div style={inputDiv}>
          <Form.Label style={{ width: "15rem" }}>LABOR TOTAL:</Form.Label>
          <Form.Control style={TotalInput} value={"$ " + OTtotal} />
        </div>
        <Link style={linkStyle} type="submit" to={`/UpdateOtLabor/${idResult}`}>
          EDIT
        </Link>
        <br />
      </div>
    </>
  );
};
export default ReviewOT;
