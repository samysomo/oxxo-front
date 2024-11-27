"use server"
import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"

export default async function registerEmployee (employeeId : string, formData : FormData) {
    let data : any = {}
    data.userEmail = formData.get("userEmail")
    data.userPassword = formData.get("userPassword")
    data.userRoles = "Employee"
    
    const response = await fetch(`${API_URL}/auth/register/${employeeId}?role=Employee`, {
        method : "POST",
        headers: {
            ...authHeaders(),
            "content-type" : "application/json"
        },
        body : JSON.stringify(data),
    })

    const employee = await response.json()
    console.log(employee)
}