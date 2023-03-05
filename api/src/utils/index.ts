import bcrypt from "bcrypt"
import { Log } from "../types"
const encryption_key = process.env.ENCRYPTION_KEY

export function hash_password( plain_text_password: string ){
    const salt_rounds = 12
    return bcrypt.hashSync(plain_text_password, bcrypt.genSaltSync(salt_rounds))
}

export function password_matches(user_supplied_password: string, database_hash:string){
    return bcrypt.compareSync(user_supplied_password, database_hash)
}

export function logger( log_type:Log, origin: string, message:unknown){
    console.log(`${log_type} Happened in ${origin}: ${message}`)
}