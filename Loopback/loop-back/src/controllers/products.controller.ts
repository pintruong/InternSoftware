import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from "@loopback/repository";
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { Products } from "../models";
import { ProductsRepository } from "../repositories";

export class ProductsController {
    constructor(
        @repository(ProductsRepository)
        public ProductsRepository: ProductsRepository
    ) { }

    @get('/products', {
        responses: {
            '200': {
                description: 'Array of Users model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: getModelSchemaRef(Products, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    })
    async find(@param.filter(Products) filter?: Filter<Products>): Promise<Products[]> {
        return this.ProductsRepository.find(filter)
    }

    @post('/products', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Products) } },
            },
        },
    })
    async create(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Products, {
                        title: 'NewUsers',
                        exclude: ['productId'],
                    }),
                },
            },
        })
        product: Omit<Products, 'productId'>,
    ): Promise<Products> {

        return this.ProductsRepository.create(product);
    }
}
