import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connented to mongodb ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;