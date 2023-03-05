import { writable } from "svelte/store";

export const offline_mode = writable(false)

let auth_store = {
    state:false,
    user:""
}

export const auth = writable(auth_store)