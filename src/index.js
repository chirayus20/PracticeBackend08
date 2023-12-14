// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/jack.js"

 
dotenv.config({
    path:'./env'
})
connectDB()


