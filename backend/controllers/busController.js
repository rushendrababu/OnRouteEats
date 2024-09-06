const asyncHandler = require("express-async-handler");
const Bus = require("../models/busModel");

const registerBus = asyncHandler(async (req, res) => {
  const { busNo, hotels } = req.body;

  if (!busNo) {
    res.status(400);
    throw new Error("please enter the Bus number");
  }

  const bus = await Bus.create({
    busNo,
    hotels,
  });

  if (bus) {
    res.status(201).json({
      _id: bus._id,
      hotels: bus.hotels,
    });
  } else {
    res.status(400);
    throw new Error("Bus not found");
  }
});

const getHotels = asyncHandler(async (req, res) => {
  const {busNo}  = req.body;

  const hotels = await Bus.findOne({ busNo }).populate("hotels", "hotelName");

  if (hotels) {
    res.status(200);
    res.send(hotels);
  } else {
    res.status(400);
    throw new Error("No hotels found");
  }
});

module.exports = { registerBus, getHotels };
