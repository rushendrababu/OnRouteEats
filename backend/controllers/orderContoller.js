const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const postOrder = asyncHandler(async (req, res) => {
  const { cart, price, busNo, hotelId, userId } = req.body;

  if (!cart || cart.length === 0) {
    res.status(400);
    throw new Error("Add some items to cart to place order");
  }

  const order = await Order.create({
    cart,
    price,
    busNo,
    hotelId,
    userId,
  });

  if (order) {
    res.status(201).json({
      _id: order._id,
      message: "Order placed successfully",
    });
  } else {
    res.status(400);
    throw new Error("Error placing order");
  }
});

const getOrder = asyncHandler(async (req,res) => {
    const {busNo, hotelId} = req.body;

    const details = await Order.findOne({busNo, hotelId}).populate("cart, userId, total");

    if(details){
        res.status(200);
        res.send(details);
    }
    else{
        res.status(400);
        throw new Error("Bus is at distance xx kms away but no orders");
    }
})

module.exports = {postOrder, getOrder};