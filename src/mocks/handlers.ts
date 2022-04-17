import { rest } from "msw"
import { Endpoints } from "../api/endpoints"
import { baseUrl } from "../api"

const BIRDS_KEY = 'birds'

export type Bird = { amount: number, date: number }

export const handlers = [
    rest.post(`${baseUrl}${Endpoints.birds}`, (req, res, ctx) => {
        const found = sessionStorage.getItem(BIRDS_KEY)
        
        if (found) {
            const birds = JSON.parse(found) as Bird[]
            sessionStorage.setItem(BIRDS_KEY, JSON.stringify([...birds, req.body]))
        } else {
            sessionStorage.setItem(BIRDS_KEY, JSON.stringify([req.body]))
        }

        return res(ctx.status(200), ctx.json({}))
    }),

    rest.get(`${baseUrl}${Endpoints.birds}`, (req, res, ctx) => {
        const found = sessionStorage.getItem(BIRDS_KEY)
        const birds = found ? JSON.parse(found) : []
        return res(ctx.status(200), ctx.json(birds))
    })
]