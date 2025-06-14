"use server"

import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.API_URL

export async function createEmployee(formData : FormData){
    console.log(formData)
    const response = await fetch(`${API_URL}/employees`, {
        method: "POST",
        body: formData,
        headers: {
            ...authHeaders()
        }
    })
    const data : Employee = await response.json()
    console.log(data)
    if(response.status === 201) {
        revalidateTag("dashboard:employees")
        redirect(`/dashboard/employees`)
    }
}