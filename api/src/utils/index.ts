import bcrypt from "bcrypt"
import Cryptr from "cryptr"
import { Log } from "../types"
const encryption_key = process.env.ENCRYPTION_KEY

export function hash_password( plain_text_password: string ){
    try {
        const salt_rounds = process.env.SALT_ROUNDS
        return bcrypt.hashSync(plain_text_password, salt_rounds as string)
    } catch (error) {
        console.log(error)
        throw Error()
    }
}

export function password_matches(user_supplied_password: string, database_hash:string){
    try {
        return bcrypt.compareSync(user_supplied_password, database_hash)
    } catch (error) {
        console.log(error)
        throw Error()
    }
}

export const cryptr = new Cryptr(encryption_key as string)

export function logger( log_type:Log, origin: string, message:string){
    console.log(`${log_type} Happened in ${origin}: ${message}`)
}