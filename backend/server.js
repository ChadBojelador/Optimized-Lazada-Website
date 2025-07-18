import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import { connectDB } from "./config/config.js";
import userRoute from "./routes/userRoute.js";


const app = express();
await connectDB();


app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);



app.listen(PORT, ()=>{
    console.log(`Server running on https://localhost:${PORT}`)
})



