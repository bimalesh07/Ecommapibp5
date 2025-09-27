import express, { urlencoded } from 'express'
import mongoose, { Mongoose } from 'mongoose';
import { config } from 'dotenv';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// env setup
config({path:'.env'})

// home route
app.get('/',(req,res)=>{
    res.json({
    message:"Serveris runing"
    })
})

app.use('/api/user',userRouter)

app.use("/api/product", productRouter);

app.use("/api/cart",cartRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb contted...!"))
  .catch((err) => console.log("MonogoDb Not conted", err));

app.listen(process.env.PORT,()=>console.log(`server is riuning:`,process.env.PORT))

