import express from "express";
import {registerController, loginController, testController} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";



const router = express.Router()
// route
// Register || MEthod post
router.post('/register', registerController)

// Login 
router.post('/login', loginController)


// Test Route
router.get('/test',requireSignin, isAdmin, testController)

export default router;