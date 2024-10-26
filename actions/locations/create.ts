 "use server"

import { API_URL, TOKEN_NAME } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import axios from "axios"

export async function createLocation(formData : FormData){
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
    
    await axios.post(`${API_URL}/locations`, location, {
        headers : {
            ...authHeaders()
        }
    })
}