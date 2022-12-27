import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { Users } from '../models/users.model';
import { UsersRepository } from '../repositories';

export class UsersController {
    constructor(
        @repository(UsersRepository)
        public UsersRepository: UsersRepository
    ) { }

    @get('/users', {
        responses: {
            '200': {
                description: 'Array of Users model instances',
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
        return this.UsersRepository.find(filter);
    }


    @post('/users', {
        responses: {
            '200': {
                description: 'Users model instance',
                content: { 'application/json': { schema: getModelSchemaRef(Users) } },
            },
        },
    })
    async create(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(Users, {
                        title: 'NewUsers',
                        exclude: ['userId'],
                    }),
                },
            },
        })
        user: Omit<Users, 'userId'>,
    ): Promise<Users> {
        return this.UsersRepository.create(user);
    }

    @del('/users/{id}', {
        responses: {
            '204': {
                description: 'Users DELETE success',
            },
        },
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
        await this.UsersRepository.deleteById(id);
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
        @requestBody() Users: Users,
    ): Promise<void> {
        await this.UsersRepository.replaceById(id, Users);
    }

    // @patch('/users/{id}', {
    //     responses: {
    //         '204': {
    //             description: 'Users PATCH success',
    //         },
    //     },
    // })
    // async updateById(
    //     @param.path.number('id') id: number,
    //     @requestBody({
    //         content: {
    //             'application/json': {
    //                 schema: getModelSchemaRef(Users, { partial: true }),
    //             },
    //         },
    //     })
    //     Users: Users,
    // ): Promise<void> {
    //     await this.UsersRepository.updateById(id, Users);
    // }


    // @get('/users/count', {
    //     responses: {
    //         '200': {
    //             description: 'Users model count',
    //             content: { 'application/json': { schema: CountSchema } },
    //         },
    //     },
    // })
    // async count(@param.where(Users) where?: Where<Users>): Promise<Count> {
    //     return this.UsersRepository.count(where);
    // }

    // @patch('/users', {
    //     responses: {
    //         '200': {
    //             description: 'Users PATCH success count',
    //             content: { 'application/json': { schema: CountSchema } },
    //         },
    //     },
    // })
    // async updateAll(
    //     @requestBody({
    //         content: {
    //             'application/json': {
    //                 schema: getModelSchemaRef(Users, { partial: true }),
    //             },
    //         },
    //     })
    //     Users: Users,
    //     @param.where(Users) where?: Where<Users>,
    // ): Promise<Count> {
    //     return this.UsersRepository.updateAll(Users, where);
    // }

    // @get('/users/{id}', {
    //     responses: {
    //         '200': {
    //             description: 'Users model instance',
    //             content: {
    //                 'application/json': {
    //                     schema: getModelSchemaRef(Users, { includeRelations: true }),
    //                 },
    //             },
    //         },
    //     },
    // })
    // async findById(
    //     @param.path.number('id') id: number,
    //     @param.filter(Users, { exclude: 'where' }) filter?: FilterExcludingWhere<Users>,
    // ): Promise<Users> {
    //     return this.UsersRepository.findById(id, filter);
    // }
}