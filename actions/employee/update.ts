"use server"

import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.API_URL

export async function updateEmployee(id: string, formData : FormData){
   
    const response = await fetch(`${API_URL}/employees/${id}`, {
        method: "PATCH",
        body: formData,
        headers: {
            ...authHeaders()
        }
    })
    console.log(formData)
    const data : Employee = await response.json()
    console.log(data)
    if(response.status === 200) {
        revalidateTag("dashboard:employees")
        revalidateTag(`dashboard:employees:${id}`)
        redirect(`/dashboard/employees`)
    }
}