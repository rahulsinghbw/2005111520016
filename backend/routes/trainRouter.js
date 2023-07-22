const express = require("express");

const router = express.Router();

const trainControllers = require("../controllers/trainController");

// Router for all trains
router.get("/trains", trainControllers.getTrains);

// Router for one train
router.get("/train/:id", trainControllers.getTrain);


module.exports = router;