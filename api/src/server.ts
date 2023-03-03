import express, { Response } from "express"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
import auth from "./routes/auth"

const PORT = process.env.PORT || 5000

app.use("/auth", auth)

app.get("/online", (_, res: Response)=>{
    console.log("Got pinged")
    return res.status(200).send()
})



app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})