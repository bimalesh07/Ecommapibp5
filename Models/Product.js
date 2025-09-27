import mongoose from "mongoose";


const productShema = new mongoose.Schema({ 
    
}, {strict:false})

export const Product = mongoose.model('Product',productShema)