// src/lists.controller.ts

import {FastifyReply, FastifyRequest} from "fastify"
import {ITodoList} from "../interfaces";

const staticLists: ITodoList[] = [
    {
        id: 'l-1',
        description: 'Dev tasks',
    }
]

export const listLists = async (
    request: FastifyRequest,
    reply: FastifyReply) => {

    Promise.resolve(staticLists)
        .then((result) => {
            reply.send(result)
        })
}