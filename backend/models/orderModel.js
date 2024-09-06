const mongoose = require("mongoose");

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel", // Reference to an item in the cart
      quantity: Number, // Quantity of the item
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel", // Reference to the Hotel model
    required: true,
  },
  busNo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus", // Reference to the Bus model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
