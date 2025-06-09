"use server"

import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.API_URL

export async function createProvider(formData : FormData){
    let provider : any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value) {
            provider[key] = formData.get(key)
        }
    }
    
    const response = await fetch(`${API_URL}/providers`, {
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            "content-type" : "application/json",
            ...authHeaders()
        }
    })
    const data : Provider = await response.json()
    console.log(data)
    if(response.status === 201) {
        revalidateTag("dashboard:providers")
        redirect(`/dashboard/providers`)
    }
}