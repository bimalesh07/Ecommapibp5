import mongoose from "mongoose";

const cartItemShema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    //s shema ko jodne ke liya hai
    ref: "Product",
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  qty: {
    type: Number,
    require: true,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    //s shema ko jodne ke liya hai
    ref: "User",
    require: true,
  },
  items:[cartItemShema]
});

export const Cart = mongoose.model('Cart', cartSchema)