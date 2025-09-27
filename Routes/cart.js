import express from "express";
import { addToCart, getuser, removerproduct,claercart,deceraseproductqty} from "../Controllers/cart.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

//add to cart

router.post("/add",isAuthenticated, addToCart);

//get usercart
router.get("/user",isAuthenticated, getuser);

// remove id 

router.delete("/remove/:productid",isAuthenticated, removerproduct);

// clear cart
router.delete("/clear",isAuthenticated, claercart);

// decerease qty by 

router.post("/--qty", isAuthenticated, deceraseproductqty);
export  default router 

