"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

const deleteProduct = async (id: string) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
            ...authHeaders()
        }
    })
    if (response.status === 200) {
        revalidateTag("dashboard:products")
        redirect("/dashboard/products")
    }
    
}

export default deleteProduct