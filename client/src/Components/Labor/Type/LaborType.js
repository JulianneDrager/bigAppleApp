import { Form } from "react-bootstrap";
import NumberOfHours from "../Hours/NumberOfHours";

const LaborType = ({
  straightTime,
  setStraightTime,
  overtime,
  setOvertime,
  prevailingWage,
  setPrevailingWage,
  overtimeHours,
  setOvertimeHours,
  prevailingWageDays,
  setPrevailingWageDays,
  prevailingWageHours,
  setPrevailingWageHours,
  hoursOfWork,
  setHoursOfWork,
  numberOfDays,
  setNumberOfDays,
}) => {
  const onChangeOvertime = (e) => {
    if (e.target.name === "overtime" && e.target.checked === true) {
      setOvertime(true);
    }

    if (e.target.checked === false) {
      setOvertime(false);
    }
  };

  const onChangeStraightTime = (e) => {
    if (e.target.name === "straight-time" && e.target.checked === true) {
      setStraightTime(true);
    }

    if (e.target.checked === false) {
      setStraightTime(false);
    }
  };

  const onChangePrevailingWage = (e) => {
    if (e.target.name === "prevailing-wage" && e.target.checked === true) {
      setPrevailingWage(true);
    }

    if (e.target.checked === false) {
      setPrevailingWage(false);
    }
  };

  return (
    <>
      <Form.Label>TYPE OF LABOR </Form.Label>
      <br />
      {!straightTime && <Form.Text>*8/hour day </Form.Text>}
      <Form.Check
        id="straight-time"
        name="straight-time"
        label="Straight Time"
        value={straightTime}
        onChange={onChangeStraightTime}
        onClick={() => setStraightTime("Straight Time")}
      />

      {straightTime && (
        <NumberOfHours
          hoursOfWork={hoursOfWork}
          setHoursOfWork={setHoursOfWork}
          numberOfDays={numberOfDays}
          setNumberOfDays={setNumberOfDays}
        />
      )}
      <br />
      <Form.Check
        id="overtime"
        name="overtime"
        label="Overtime"
        value={overtime}
        onChange={onChangeOvertime}
        onClick={() => setOvertime("Overtime")}
      />

      {overtime && (
        <Form.Control
          placeholder="Enter Overtime Hours"
          value={overtimeHours}
          onChange={(e) => setOvertimeHours(e.target.value)}
        />
      )}

      <Form.Check
        id="prevailing-wage"
        name="prevailing-wage"
        label="Prevailing Wage/Other"
        value={prevailingWage}
        onChange={onChangePrevailingWage}
        onClick={() => setPrevailingWage("Prevailing Wage")}
      />
      {prevailingWage && (
        <>
          <Form.Text>*NOTE: 1 day = 8/hrs</Form.Text>
          <Form.Control
            as="textarea"
            placeholder="Enter Number of Days"
            style={{ height: "50px" }}
            value={prevailingWageDays}
            onChange={(e) => setPrevailingWageDays(e.target.value)}
          />
          <Form.Control
            as="textarea"
            placeholder="Enter Number of Hours"
            style={{ height: "50px" }}
            value={prevailingWageHours}
            onChange={(e) => setPrevailingWageHours(e.target.value)}
          />
        </>
      )}
      <hr />
    </>
  );
};
export default LaborType;
