import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "../src/Routes/authRoutes.js"
import tutorRoutes from "./Routes/tutorRoutes.js"
import messageRoutes from "./Routes/messageRoutes.js"
import {v2 as cloudinary} from "cloudinary"
import path from "path"
import  {app, server, io} from "./socket/socket.js"


const __dirname = path.resolve()


cloudinary.config({
    cloud_name:"dm3jnihfu",
    api_key:"782275286945426",
    api_secret:"WxdHbltJE_GdIRPo-Xfqx29YdUo",
})
// console.log(process.env.MONGODB_STRING)

await mongoose.connect("mongodb+srv://aroradeepak0817:IEXmL1e9UJBH2K61@cluster0.x9xhl3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> console.log("connected to database"))
// const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
app.use(cors(
));



app.use("/api/auth",authRoutes)
app.use("/api/tutor", tutorRoutes)
app.use("/api/message", messageRoutes)

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})


server.listen('7000',()=>{
    console.log("server running on port 7000")
})

