import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

 export const PORT = process.env.PORT || 5000;

 export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected")
    }

    catch(error){
        console.log("Connection error", error.message)
    }
 }