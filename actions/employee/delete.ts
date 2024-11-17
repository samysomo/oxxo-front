"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const deleteEmployee = async (id: string) => {
    const response = await fetch(`${API_URL}/employees/${id}`, {
        method: "DELETE",
        headers: {
            ...authHeaders()
        }
    })
    if (response.status === 200) {
        revalidateTag("dashboard:employees")
        redirect("/dashboard/employees")
    }
    
}

export default deleteEmployee