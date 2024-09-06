const express = require("express");
const { registerHotel, getMenu } = require("../controllers/hotelController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerHotel);
router.route("/getmenu").get(protect, getMenu);

module.exports = router;
