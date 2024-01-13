const express = require("express");
const router = express.Router();
const optionsController = require("../controllers/OptionsController");

router.get("/getOptions", optionsController.getAllOptionTypes);
router.post("/createOptions", optionsController.createOptions);
router.put("/update/:id", optionsController.updateOptions);
router.delete("/delete/:id", optionsController.deleteOptions);

module.exports = router;
