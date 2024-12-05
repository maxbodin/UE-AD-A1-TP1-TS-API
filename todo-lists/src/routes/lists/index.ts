// routes/lists/index.ts

import {FastifyInstance, FastifyPluginAsync} from 'fastify'
import * as listsController from '../../controllers/lists.controller'
import {listCreateSchema} from "../../schema/user.schema";

const lists: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
    fastify.get('/', listsController.listLists)

    fastify.route({
        method: 'POST',
        url: '/',
        schema: listCreateSchema,
        handler: listsController.addList,
    })
}

export default lists