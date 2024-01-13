const express = require("express");
const router = express.Router();
const materialController = require("../controllers/materialController");

// Routes for Materials
router.get("/getMaterials", materialController.getAllMaterials);
router.get("/getMaterial/:id", materialController.getMaterialById);
router.post("/createMaterials", materialController.createMaterial);
router.put("/update/:id", materialController.updateMaterial);
router.put(
  "/updateDet/:id/:detailsId",
  materialController.updateDetailedMaterial
);
router.delete("/delete/:id", materialController.deleteMaterial);

module.exports = router;
