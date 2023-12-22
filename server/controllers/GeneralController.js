const General = require("../models/General");

// Get all Generals
const getAllGeneral = async (req, res) => {
  try {
    const general = await General.find();
    res.json(general);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new General
const createGeneral = async (req, res) => {
  const {
    number,
    name,
    phone,
    street,
    city,
    zipcode,
    reqby,
    management,
    fdnytest,
    violation,
    violationdate,
    estimatedate,
  } = req.body;

  const newGeneral = new General({
    number,
    name,
    phone,
    street,
    city,
    zipcode,
    reqby,
    management,
    fdnytest,
    violation,
    violationdate,
    estimatedate,
  });

  try {
    await newGeneral.save();
    res.status(201).json(newGeneral);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a General
const updateGeneral = async (req, res) => {
  try {
    const updatedGeneral = await General.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedGeneral);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a General
const deleteGeneral = async (req, res) => {
  try {
    await General.findByIdAndDelete(req.params.id);
    res.json({ message: "General deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGeneral,
  createGeneral,
  updateGeneral,
  deleteGeneral,
};
