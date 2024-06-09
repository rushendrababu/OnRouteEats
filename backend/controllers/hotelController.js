const asyncHandler = require("express-async-handler");
const Hotel = require("../models/hotelModel");

//@description    Register new hotel

const registerHotel = asyncHandler(async (req, res) => {
  const { hotelName, menu, latitude, longitude } = req.body;

  if (!hotelName || !menu || !latitude || !longitude) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  const hotel = await Hotel.create({
    hotelName,
    menu,
    latitude,
    longitude,
  });

  if (hotel) {
    res.status(201).json({
      _id: hotel._id,
      hotelName: hotel.hotelName,
      menu: hotel.menu,
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    });
  } else {
    res.status(400);
    throw new Error("Hotel not found");
  }
});

//get menu when clicked on the restaurant

const getMenu = asyncHandler(async (req, res) => {
  const { resId } = req.body;

  const hotel = await Hotel.findById(resId);

  const menu = hotel.menu;

  if(menu){
    res.json(menu);
  }
  else{
    res.status(400);
    throw new Error("No menu available");
  }
});

module.exports = { registerHotel, getMenu};
