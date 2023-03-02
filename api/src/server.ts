import express, {Request, Response} from "express"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
import prisma from "../prisma"

const PORT = process.env.PORT || 5000

app.get("/online", (_, res: Response)=>{
    console.log("Got pinged")
    return res.status(200).send()
})

app.get("/test", async (_req: Request,res: Response)=>{
    try {
        await prisma.dump.create({
            data:{
                name:"ye",
                noice:10,
                creator:"",
                mods:["someone", "anotherone"],
                banner:"ouep"
            }
        })
        const result = await prisma.dump.findMany()
        return res.status(200).send({
            result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({})
    }
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})