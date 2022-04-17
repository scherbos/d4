import { Bird } from "../mocks/handlers"
import { birds } from "./endpoints"

export const baseUrl = 'http://localhost:3001'

type NoBody = Omit<RequestInit, 'body'>
interface Options extends NoBody {
    data?: Record<string, any>
}

export async function ApiService(path: string, options: Options) {
    const base: RequestInit = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if (options.data) {
        base.body = JSON.stringify(options.data)
    }

    try {
        const response = await fetch(`${baseUrl}${path}`, base)
        
        if (response.status < 400) {
            return response.json()
        }

        throw new Error(response.statusText)
    } catch (error) {
        return error
    }
}

export function saveBirds(data: Bird) {
    return ApiService(birds, { method: 'POST', data }).then(data => data)
}

export function getBirds() {
    return ApiService(birds, { method: 'GET' }).then(data => data)
}