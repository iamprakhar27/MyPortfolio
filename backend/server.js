import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./database/db.js";
import common_route from "./routes/common_routes.js";

const serverApp = express()

dotenv.config()
serverApp.use(cors())

serverApp.use(express.json())
serverApp.use(express.urlencoded())
serverApp.use(express.static("public"))

serverApp.use("/",common_route)

connectdb()

//const PORT = 4000

const PORT = process.env.PORT || 4000

serverApp.listen(PORT,() =>{
    console.log(`server is live on http://localhost:${PORT}`);
})