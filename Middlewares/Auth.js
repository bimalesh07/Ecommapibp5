import{User} from '../Models/User.js'
import jwt from 'jsonwebtoken'


export const isAuthenticated = async(req,res,next)=>{
    const token = req.header('Auth')

    if(!token) return res.json({
        message:"Login First",
    })
    const decode = jwt.verify(token,process.env.JWT)

    const id = decode.userId;
    let user = await User.findById(id)

    if(!user) return res.json({
        message:"user not find"
    })

    req.user = user

    
    next()

}