import { Product } from "../Models/Product.js";

//add product
export const addproduct = async(req,res)=>{
    try {
        let product = await Product.create(req.body)
        res.json({
            message:"Product added Successfully",
            product,
            sucess:true
        })
        
    } catch (error) {
        res.json(error.message)
        
    }

}
// get all product

export const getallproduct = async(req,res)=>{
    try {
    const product = await Product.find();
    if(!product)return res.json({
        message:"Not found Product",
        sucess:false
    })
    res.json({
        message:"Fetch all Products",
        product,
        sucess:true
    })
    }  catch (error) {
        res.json(error.message)
        
    }
}

// get product byid 

export const getProductById = async (req,res)=>{
    const id = req.params.id
        try {
          const product = await Product.findById(id);
          if (!product)
            return res.json({
              message: "Enter id Not Find Product",
              sucess: false,
            });
          res.json({
            message: "Spepecific id user",
            product,
            sucess: true,
          });
        } catch (error) {
          res.json(error.message);
        }

} 

// update product by id

export const updateproductById = async(req,res)=>{
   const id = req.params.id;
   try {
     const product = await Product.findByIdAndUpdate(id, req.body,{new:true});
     if (!product)
       return res.json({
         message: "Enter id Not Find Product",
         sucess: false,
       });
     res.json({
       message: "Product Updatetd Successfully",
       product,
       sucess: true,
     });
   } catch (error) {
     res.json(error.message);
   }

}
//DELETEBYID
export const deleteById = async (req,res)=>{
    const id = req.params.id;
   try {
     const product = await Product.findByIdAndDelete(id);
     if (!product)
       return res.json({
         message: "invalid id ",
         sucess: false,
       });
     res.json({
       message: "Produt Delete suceessfully..!",
       product,
       sucess: true,
     });
   } catch (error) {
     res.json(error.message);
   }

}