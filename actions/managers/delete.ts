"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const deleteManager = async (formData : FormData) => {
    const managerId = formData.get("deleteValue")
    if (!managerId) return;
    const response = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders()
        }
    })
    if (response.status === 200) {
        revalidateTag("dashboard:managers")
        redirect("/dashboard/managers")
    }
    
}

export default deleteManager