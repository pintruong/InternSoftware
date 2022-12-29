import { inject } from '@loopback/core';
import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where,
} from '@loopback/repository';
import {
    del,
    get,
    getModelSchemaRef,
    HttpErrors,
    param,
    patch,
    post,
    put,
    requestBody,
} from '@loopback/rest';
import { Users } from '../models';
import { UsersRepository } from '../repositories';

export class UsersController {
    constructor(
        @repository(UsersRepository)
        public usersRepository: UsersRepository,
    ) { }

    @get('/users', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: getModelSchemaRef(Users, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    })
    async find(@param.filter(Users) filter?: Filter<Users>): Promise<Users[]> {
        return this.usersRepository.find(filter);
    }

    @get('/users/count', {
        responses: {
            '200': {
                description: 'Todo model count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async count(@param.where(Users) where?: Where<Users>): Promise<Count> {
        return this.usersRepository.count(where);
    }
    @get('/users/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: {
                    'application/json': {
                        schema: getModelSchemaRef(Users, { includeRelations: true }),
                    },
                },
            },
        },
    })
    async findById(
        @param.path.number('id') id: number,
        @param.filter(Users, { exclude: 'where' }) filter?: FilterExcludingWhere<Users>,
    ): Promise<Users> {
        return this.usersRepository.findById(id, filter);
    }


    @del('/users/{id}', {
        responses: {
            '204': {
                description: 'Products DELETE success',
            },
        },
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
        await this.usersRepository.deleteById(id);
    }

    @post('/users', {
        responses: {
            '200': {
                description: 'Products model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Users) } },
            },
        },
    })
    async create(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Users, {
                        title: 'NewProducts',
                        exclude: ['id'],
                    }),
                },
            },
        })
        user: Omit<Users, 'id'>,
    ): Promise<Users> {

        return this.usersRepository.create(user);

    }

    @put('/users/{id}', {
        responses: {
            '204': {
                description: 'Users PUT success',
            },
        },
    })
    async replaceById(
        @param.path.number('id') id: number,
        @requestBody() user: Users,
    ): Promise<void> {
        await this.usersRepository.replaceById(id, user);
    }

    @patch('/users/{id}', {
        responses: {
            '204': {
                description: 'Users PATCH success',
            },  
        },
    })
    async updateById(
        @param.path.number('id') id: number,
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Users, { partial: true }),
                },
            },
        })
        user: Users,
    ): Promise<void> {
        await this.usersRepository.updateById(id, user);
    }

    @patch('/users', {
        responses: {
            '200': {
                description: 'Users PATCH success count',
                content: { 'application/json': { schema: CountSchema } },
            },
        },
    })
    async updateAll(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Users, { partial: true }),
                },
            },
        })
        user: Users,
        @param.where(Users) where?: Where<Users>,
    ): Promise<Count> {
        return this.usersRepository.updateAll(user, where);
    }

}