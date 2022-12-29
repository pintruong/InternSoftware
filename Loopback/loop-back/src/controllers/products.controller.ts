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
                description: 'Array of Products model instances',
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

    @get('/products/count', {
        responses: {
            '200': {
                description: 'Products model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(@param.where(Products) where?: Where<Products>): Promise<Count> {
        return this.ProductsRepository.count(where);
    }
    @get('/products/{id}', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: {
                    'application/json': {
                        schema: getModelSchemaRef(Products, { includeRelations: true }),
                    },
                },
            },
        },
    })
    async findById(
        @param.path.number('id') id: number,
        @param.filter(Products, { exclude: 'where' }) filter?: FilterExcludingWhere<Products>,
    ): Promise<Products> {
        return this.ProductsRepository.findById(id, filter);
    }

    @post('/products', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Products) } },
            },
        },
    })
    async create(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Products, {
                        title: 'NewProducts',
                        exclude: ['productId'],
                    }),
                },
            },
        })
        product: Omit<Products, 'productId'>,
    ): Promise<Products> {

        return this.ProductsRepository.create(product);

    }

    @del('/products/{id}', {
        responses: {
            '204': {
                description: 'Products DELETE success',
            },
        },
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
        await this.ProductsRepository.deleteById(id);
    }


    @put('/products/{id}', {
        responses: {
            '204': {
                description: 'Products PUT success',
            },
        },
    })
    async replaceById(
        @param.path.number('id') id: number,
        @requestBody() Users: Products,
    ): Promise<void> {
        await this.ProductsRepository.replaceById(id, Users);
    }
}

