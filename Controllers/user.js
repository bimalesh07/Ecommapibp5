import {User} from '../Models/User.js'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

//user register

export const register = async(req,res)=>{
 const{name,email,password} = req.body;

 let user = await User.findOne({email});
 if(user) return res.json({
    message:"User Already Exist",
    sucess:false
 })
//passwords hased
let hasPassowrd = await bcrypt.hash(password,10)


  user = await User.create({
    name,
    email,
    password:hasPassowrd
  })
  res.json({
    message:"User Register Succefully",
    sucess:true
  })
}

// Login 
export const loginuser = async(req,res)=>{
    const{email, password} = req.body;
    if(email==""|| password==" ") return res.json({
        message:"Please Enter userName Or Password",
        sucess:false
    })
    const user = await User.findOne({email})
    if(!user) return res.json({
        message:"User Not Find",
        sucess:false,
    })
    const validpass = await bcrypt.compare(password,user.password)
    if(!validpass) return res.json({
        message:"Invalid passwords",
        sucess: false,
    })

   const token = jwt.sign({userid:user._id},process.env.JWT,{
    expiresIn:'1d'
   })

    res.json({
        message:`welcome ${user.name}`,
        token,
        sucess:true

    })
}
