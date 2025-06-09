"use server"
import authHeaders from "@/helpers/authHeaders"

const API_URL = process.env.API_URL

export default async function updateManagerUser(userId : string, formData : FormData) {
    let data : any = {}
    data.userEmail = formData.get("userEmail")
    data.userPassword = formData.get("userPassword") ? formData.get("userPassword") : undefined
    data.userRoles = "Manager"

    console.log(data)
    
    const response = await fetch(`${API_URL}/auth/${userId}`, {
        method : "PATCH",
        headers: {
            ...authHeaders(),
            "content-type" : "application/json"
        },
        body : JSON.stringify(data),
    })

    const manager = await response.json()
    console.log(manager)
}