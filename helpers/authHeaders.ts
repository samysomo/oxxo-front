"use server"
import { cookies } from "next/headers"
import { cache } from "react"

const TOKEN_NAME = process.env.TOKEN_NAME

const authHeaders = cache(() => {
    const token = cookies().get(TOKEN_NAME!)?.value
    return {
        Authorization : `Bearer ${token}`
    }
})

export default authHeaders