"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function updateLocation(store: string, formData : FormData){
    let location : any = {}
    let locationLatling = [0,0]
    for (const key of formData.keys()){
        const value = formData.get(key)
        if (value) {
            if (key === "locationLat"){
                locationLatling[0] = +value
            } else if (key === "locationLng"){
                locationLatling[1] = +value
            } else {
                location[key] = formData.get(key)
            }
        }
    }
    location.locationLatling = locationLatling
    
    const response = await fetch(`${API_URL}/locations/${store}`, {
        method: "PATCH",
        body: JSON.stringify(location),
        headers: {
            "content-type" : "application/json",
            ...authHeaders()
        }
    })
    const data = await response.json()
    if(response.status === 200) {
        revalidateTag("dashboard:locations")
        revalidateTag(`dashboard:locations:${store}`)
        redirect(`/dashboard?store=${data.locationId}`)
    }
}