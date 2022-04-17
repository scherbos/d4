import { rest } from "msw"
import { birds } from "../api/endpoints"
import { baseUrl } from "../api"

const BIRDS_KEY = 'birds'

export type Bird = { amount: number, date: number }

export const handlers = [
    rest.post(`${baseUrl}${birds}`, (req, res, ctx) => {
        const birds = sessionStorage.getItem(BIRDS_KEY)
        
        if (birds) {
            const parsed = JSON.parse(birds) as Bird[]
            sessionStorage.setItem(BIRDS_KEY, JSON.stringify([...parsed, req.body]))
        } else {
            sessionStorage.setItem(BIRDS_KEY, JSON.stringify([req.body]))
        }

        return res(ctx.status(200), ctx.json({}))
    }),

    rest.get(`${baseUrl}${birds}`, (req, res, ctx) => {
        const birds = sessionStorage.getItem(BIRDS_KEY) || ''
        const parsed = JSON.parse(birds) || []
        return res(ctx.status(200), ctx.json(parsed))
    })
]