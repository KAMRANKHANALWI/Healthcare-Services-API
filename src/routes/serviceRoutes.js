const express = require("express");
const serviceController = require("../controllers/serviceControllers");

const router = express.Router();

// Routes
router.post("/", serviceController.addService);
router.get("/", serviceController.getAllServices);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
