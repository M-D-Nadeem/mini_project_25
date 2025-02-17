import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import router from "./routers/router.js"

const app=express()
dotenv.config()
app.use(express.json())
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
})) 

app.use("/",(req,res)=>{
    res.send("Hello")
})
app.use("/app",router)

export default app