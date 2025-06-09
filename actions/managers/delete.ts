"use server"

import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const API_URL = process.env.API_URL

const deleteManager = async (formData : FormData) => {
    const managerId = formData.get("deleteValue")
    if (!managerId) return;
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders()
        }
    })
    console.log(await response.json())
    if (response.status === 200) {
        revalidateTag("dashboard:managers")
        redirect("/dashboard/managers")
    }
    
}

export default deleteManager