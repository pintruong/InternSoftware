import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, postgresql: { schema: 'public', table: 'users' } } })
export class Users extends Entity {
  @property({
    type: 'number',
    // required: true,s
    scale: 0,
    id: true,
    generated: true,
    postgresql: { columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined },
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: true,
    postgresql: { columnName: 'user_name', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: true,
    postgresql: { columnName: 'user_email', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  userEmail: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: true,
    postgresql: { columnName: 'user_password', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  userPassword: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
