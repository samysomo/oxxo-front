"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function updateProvider(id: string, formData : FormData){
    let provider : any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value) {
            provider[key] = formData.get(key)
        }
    }

    //if (!provider.products) delete provider.products
    
    const response = await fetch(`${API_URL}/providers/${id}`, {
        method: "PATCH",
        body: JSON.stringify(provider),
        headers: {
            "content-type" : "application/json",
            ...authHeaders()
        }
    })

    const data : Provider = await response.json()
    console.log(data)

    if(response.status === 200) {
        revalidateTag("dashboard:providers")
        revalidateTag(`dashboard:providers:${id}`)
        redirect(`/dashboard/providers`)
    }
}