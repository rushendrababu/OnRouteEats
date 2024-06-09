const express = require("express");
const { registerHotel, getMenu } = require("../controllers/hotelController");

const router = express.Router();

router.route("/").post(registerHotel);
router.route("/getmenu").get(getMenu);

module.exports = router;
