import { comparePassward, hashPassward } from "../helper/authHelper.js"
import userModels from "../models/userModels.js"
import JWT from "jsonwebtoken"

export const registerController = async(req,res) => {
    try {
        const {name, email,passward,phone,address} = req.body
        
        // validation
        if(!name){
            return res.send({message: 'Name is Required'})
        }
        if(!email){
            return res.send({message: 'Email is Required'})
        }
        if(!passward){
            return res.send({message: 'Passward is Required'})
        }
        if(!phone){
            return res.send({message: 'Phone is Required'})
        }
        if(!address){
            return res.send({message: 'Address is Required'})
        }

        // check user
        const existinguser = await userModels.findOne({email})

        // existing user
        if(existinguser){
            return res.status(200).send({
                success:false,
                message: 'Already Regsiter please login',
            })
        }
        // register user
        const hashedPassward= await hashPassward(passward)
        // save
        const user = await new userModels({name, email, passward:hashedPassward ,phone,address}).save()
        
        res.status(201).send({
            success:true,
            message:'User register Successully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Register',
            error
        })
    }
}

export const loginController = async(req,res) => {
    try {
        const {email,passward} = req.body

        // Validation
        if(!email || !passward){
            return res.status(404).send({
                success:false,
                message:"Email or passward is missing"
            })
        }

        // check user
        const user = await userModels.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not register"
            })
        }
        const match = await comparePassward(passward,user.passward)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Passward"
            })
        }

        // Token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message:"Login succesful",
            user:{
                name:user.name,
                email:user.email,

            },token
        })

    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}
    
export const testController = (req,res) => {
    res.send('Protected Route')
}