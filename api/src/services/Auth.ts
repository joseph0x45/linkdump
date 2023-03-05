import { Request, Response } from "express"
import prisma from "../../prisma"
import { hash_password, password_matches, logger } from "../utils"

export async function register(req: Request<{}, {}, { email:string, password:string, username:string }>, res: Response){
    try {
        const { email, password, username } = req.body
        const potential_duplicate = await prisma.user.findFirst({
            where:{
                OR:[
                    { email },
                    { username }
                ]
            }
        })
        if(potential_duplicate){
            if (potential_duplicate.email===email){
                return res.status(409).send({"message":"Email already in use"})
            }
            if (potential_duplicate.username===username){
                return res.status(409).send({"message":"Username already in use"})
            }
        }
        const hashed_password = hash_password(password)
        await prisma.user.create({
            data:{
                email,
                username,
                password: hashed_password
            }
        })
        return res.status(200).send({
            username
        })
    } catch (error) {
        logger("Error", register.name, error)
        return res.status(500).send()
    }
}

export async function login( req: Request<{}, {}, { email_or_username:string, password:string }>, res: Response ){
    try {
        const { email_or_username, password } = req.body
        const user_to_find = await prisma.user.findFirst({
            where:{
                OR:[
                    { username: email_or_username },
                    { email: email_or_username }
                ]
            }
        })
        if(!user_to_find){
            return res.status(404).send()
        }
        if (!password_matches(password, user_to_find.password)){
            return res.status(400).send()
        }
        return res.status(200).send({
            user: user_to_find.username
        })
    } catch (error) {
        logger("Error", login.name, error)
        return res.status(500).send()
    }
}

const AuthService = {
    register,
    login
}

export default AuthService