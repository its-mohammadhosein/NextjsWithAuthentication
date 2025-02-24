'use client'
import { signIn } from "next-auth/react"

export default function page(){
    
    return(
        <>
        <button onClick={()=>{signIn('credentials',{email:'a@a.com',password:'password'})}}>
            LOGIN
        </button>
        </>
    )
}