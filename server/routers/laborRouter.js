const express = require("express");
const router = express.Router();
const laborController = require("../controllers/laborController");

router.get("/getLaborInfo", laborController.getAllLaborEntries);
router.get("/getLabor/:id", laborController.getLaborById);
router.post("/createLabor", laborController.createLaborEntry);
router.put("/update/:id/", laborController.updateLaborEntry);
// router.put("/update/:id/:typeOfWorkId", laborController.updateLaborEntry);
router.delete("/delete/:id", laborController.deleteLaborEntry);

module.exports = router;
