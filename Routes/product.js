import {
  addproduct,
  getallproduct,
  getProductById,
  updateproductById,
  deleteById,
} from "../Controllers/product.js";
import express from "express";

const router = express.Router();

//add product
router.post("/add", addproduct);

// getall product
router.get("/all", getallproduct);

// getby id
router.get("/:id", getProductById);

// update by product by id
router.put("/:id", updateproductById);
// deletebyid

router.delete("/:id", deleteById);

export default router;
