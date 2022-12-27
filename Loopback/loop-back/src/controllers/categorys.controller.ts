import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from "@loopback/repository";
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { Categorys } from "../models";
import { CategorysRepository } from "../repositories/categorys.repository";

export class CategorysController {
    constructor(
        @repository(CategorysRepository)
        public CategorysRepository: CategorysRepository
    ) { }

    @get('/categorys', {
        responses: {
            '200': {
                description: 'Array of Users model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: getModelSchemaRef(Categorys, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    })
    async find(@param.filter(Categorys) filter?: Filter<Categorys>): Promise<Categorys[]> {
        return this.CategorysRepository.find(filter)
    }
}