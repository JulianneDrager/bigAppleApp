// controllers/signageController.js
const Signage = require("../../models/old/Signage");

const signageController = {
  getAllSignage: async (req, res) => {
    try {
      const getSignage = await Signage.find();
      res.json(getSignage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createSignage: async (req, res) => {
    try {
      const newSignage = await Signage.create(req.body);
      res.status(201).json(newSignage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateSignage: async (req, res) => {
    try {
      const newSigns = await Signage.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(newSigns);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete Type Building Options
  deleteSignage: async (req, res) => {
    try {
      await Signage.findByIdAndDelete(req.params.id);
      res.json({ message: "Sign deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = signageController;
