const mongoose = require("mongoose");

const hotelModel = new mongoose.Schema({
  hotelName: {type: String,required: true,},
  menu: [
    {
      itemName: {type: String,required: true,},
      price: {type: Number,required: true,},
      description: {type: String,required: true,},
      // Add more fields as needed
    },
  ],
  latitude: {type: String,required: true,},
  longitude: {type: String,required: true,},

},{timestamps:true}
);

const Hotel = mongoose.model("Hotel", hotelModel);

module.exports = Hotel;
