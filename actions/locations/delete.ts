
"use server"

import { API_URL, TOKEN_NAME } from "@/constants"
import authHeaders from "@/helpers/authHeaders"
import axios from "axios"

const deleteLocation = async (formData : FormData) => {
    const locationId = formData.get("deleteValue")
    if (!locationId) return
    axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            ...authHeaders()
        }
    })
}

export default deleteLocation