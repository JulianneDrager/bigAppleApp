const express = require("express");
const router = express.Router();
const signageController = require("../../controllers/old/signageController");

router.get("/", signageController.getAllSignage);
router.post("/createSignage", signageController.createSignage);
router.put("/update/:id", signageController.updateSignage);
router.put("/delete/:id", signageController.deleteSignage);

module.exports = router;
