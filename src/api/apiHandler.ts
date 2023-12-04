import axios from "axios"



const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export async function PostRequest(endpoint: string, data?: any) {

    try {
        const response = await axios.post(`${baseUrl}${endpoint}`, data)


        return response.data
    }
    catch (error: any) {

    }
}

export async function GetRequest(endpoint: string, data: {}) {
    try {
        const response = await axios.get(`${baseUrl}/${endpoint}`)
        return response.data
    }
    catch (error: any) {

    }
}