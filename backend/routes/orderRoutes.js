const express = require("express");
const {postOrder} = require("../controllers/orderContoller");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, postOrder);

module.exports = router;
