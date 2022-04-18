import { rest } from "msw"
import { Endpoints } from "../api/endpoints"
import { baseUrl } from "../api"
import { db } from "./db"

const BIRDS_KEY = 'birds'

export type Bird = { amount: number, date: number }

export const handlers = [
    rest.post(`${baseUrl}${Endpoints.birds}`, (req, res, ctx) => {
        const birds = db.read(BIRDS_KEY)
        db.write(BIRDS_KEY, [...birds, req.body])

        return res(ctx.status(200), ctx.json({}))
    }),

    rest.get(`${baseUrl}${Endpoints.birds}`, (req, res, ctx) => {
        const birds = db.read(BIRDS_KEY)
        return res(ctx.status(200), ctx.json(birds))
    })
]