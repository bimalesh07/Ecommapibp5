import mongoose from "mongoose";


const userShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default:Date.now,
  },
});

export const User = mongoose.model('user',userShema)