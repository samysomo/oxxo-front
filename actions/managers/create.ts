"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function createManager(formData : FormData){
    let manager : any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value) {
            manager[key] = formData.get(key)
        }
    }
    
    const response = await fetch(`${API_URL}/managers`, {
        method: "POST",
        body: JSON.stringify(manager),
        headers: {
            "content-type" : "application/json",
            ...authHeaders()
        }
    })
    const data : Manager = await response.json()
    if(response.status === 201) {
        revalidateTag("dashboard:managers")
        //redirect(`/dashboard/managers/${data.managerId}`)
    }
}