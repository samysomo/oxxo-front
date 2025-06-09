"use server"

import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"

const API_URL = process.env.API_URL

export async function createManager(formData : FormData){
    let manager : any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value) {
            manager[key] = formData.get(key)
        }
    }
    manager.managerSalary = +manager.managerSalary
    if (manager.location) {
        manager.location = +manager.location
    } else {
        delete(manager.location)
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