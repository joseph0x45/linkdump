import express from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()


const server = express()
server.use(cors())
server.use(express.json())
const PORT = process.env.PORT || 8080

const pool = new Pool({
    connectionString:""
})
export const db = drizzle(pool)

server.listen(PORT, ()=>{

    console.log("App listening on port 8080")
})
