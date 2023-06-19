import express from "express";
import dotevn from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"

// config env
dotevn.config();

// coneect db
connectDB()

// rest object
const app = express();

// middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
 app.use('/api/v1/auth', authRoute)

// ret api
app.get('/',( req , res )=>{
    res.send('<h1> Welcome </h1>' )
})

// port
const PORT = process.env.PORT || 8080

// rest listen
app.listen(PORT,()=>{
    console.log('server running on')
})