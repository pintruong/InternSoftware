import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from "@loopback/repository";
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { Customers } from "../models";
import { CustomersRepository } from "../repositories";

export class CustomersController {
    constructor(
        @repository(CustomersRepository)
        public CustomersRepository: CustomersRepository
    ) { }

    @get('/Customers', {
        responses: {
            '200': {
                description: 'Array of Users model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: getModelSchemaRef(Customers, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    })
    async find(@param.filter(Customers) filter?: Filter<Customers>): Promise<Customers[]> {
        return this.CustomersRepository.find(filter)
    }
}