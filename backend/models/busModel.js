const mongoose = require("mongoose");

const busModel = new mongoose.Schema({
  busNo: {type: String, unique:true, required: true,},
  hotels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
});

const Bus = mongoose.model("Bus", busModel);

module.exports = Bus;
