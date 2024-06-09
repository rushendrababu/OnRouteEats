const express = require("express");
const {registerBus, getHotels} = require("../controllers/busController");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerBus);
router.route("/hotels").get(protect,getHotels);

module.exports = router;