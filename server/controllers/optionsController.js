const Options = require("../models/Options");

optionsController = {
  getAllOptionTypes: async (req, res) => {
    try {
      const optionTypes = await Options.find();
      res.json(optionTypes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createOptions: async (req, res) => {
    try {
      const newOptionType = await Options.create(req.body);
      res.status(201).json(newOptionType);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateOptions: async (req, res) => {
    try {
      const newOptions = await Options.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(newOptions);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete Type Building Options
  deleteOptions: async (req, res) => {
    try {
      await Options.findByIdAndDelete(req.params.id);
      res.json({ message: "Option deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = optionsController;
