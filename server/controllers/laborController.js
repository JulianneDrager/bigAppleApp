const Labor = require("../models/Labor");

// Assuming you have a fixed rate for labor per hour
// const LABOR_RATE_PER_HOUR = 20; // Adjust this based on your actual rates

// Get all labor entries
exports.getAllLaborEntries = async (req, res) => {
  try {
    const laborEntries = await Labor.find();
    res.json(laborEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new labor entry
exports.createLaborEntry = async (req, res) => {
  let newLabor = new Labor({
    numberOfMen: req.body.numberOfMen,
    hoursOfWork: req.body.hoursOfWork,
    numberOfDays: req.body.numberOfDays,
    price: req.body.price,

    // array of Labor work
    straightTime: req.body.straightTime,
    overtime: req.body.overtime,
    overtimeHours: req.body.overtimeHours,
    prevailingWage: req.body.prevailingWage,
    prevailingWageHours: req.body.prevailingWageHours,
    prevailingWageDays: req.body.prevailingWageDays,

    // Calculate cost based on labor rates
    // let laborCost;
    // if (typeOfWork === 'Straight Time') {
    //   laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR;
    // } else if (typeOfWork === 'Overtime') {
    //   // You can have a different overtime rate if needed
    //   const OVERTIME_RATE = 1.5; // 1.5 times the regular rate
    //   laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR * OVERTIME_RATE;
    // } else if (typeOfWork === 'Prevailing Wage') {
    //   // Handle prevailing wage calculation if needed
    //   // You might have a different rate for prevailing wage
    //   const PREVAILING_WAGE_RATE = 25;
    //   laborCost = numberOfMen * hoursOfWork * PREVAILING_WAGE_RATE;
    // }
  });

  try {
    await newLabor.save();
    res.status(201).json(newLabor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get LaborId
exports.getLaborById = async (req, res) => {
  // console.log(req.body.details);
  try {
    const getLaborID = await Labor.findById({ _id: req.params.id });
    res.json(getLaborID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a labor entry
exports.updateLaborEntry = async (req, res) => {
  try {
    const updatedLaborEntry = await Labor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedLaborEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a labor entry
exports.deleteLaborEntry = async (req, res) => {
  try {
    await Labor.findByIdAndDelete(req.params.id);
    res.json({ message: "Labor entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
