import  JWT  from "jsonwebtoken";
import userModels from "../models/userModels.js";

export const requireSignin = async (req,res,next) =>{
    try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    next();
    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req,res,next) =>{
    try {
        const user = await userModels.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                mesage: "Unauthorize Acess"

            })
        } else{
            next();
        }
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    next();
    } catch (error) {
        console.log(error)
    }
}