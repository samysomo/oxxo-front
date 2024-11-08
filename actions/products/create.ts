"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function createProduct(formData : FormData){
    let product : any = {}
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value && !(key.includes("$ACTION"))) {
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price
    product.countSeal = +product.countSeal
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "content-type" : "application/json",
            ...authHeaders()
        }
    })
    const data : Product = await response.json()
    if(response.status === 201) {
        revalidateTag("dashboard:products")
        redirect(`/dashboard/products`)
    }
}