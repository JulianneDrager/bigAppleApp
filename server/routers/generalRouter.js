const express = require("express");
const router = express.Router();
const GeneralController = require("../controllers/GeneralController");

// Routes for General
router.get("/getGeneral", GeneralController.getAllGeneral);
router.post("/createGeneral", GeneralController.createGeneral);
router.put("/update/:id", GeneralController.updateGeneral);
router.delete("/delete/:id", GeneralController.deleteGeneral);

module.exports = router;
