import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'categorys'}}
})
export class Categorys extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    // generated: ,
    id: 1,
    postgresql: {columnName: 'category_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  categoryId: number;

  @property({
    type: 'string',
    length: 50,
    // generated: ,
    postgresql: {columnName: 'category_name', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  categoryName?: string;

  @property({
    type: 'string',
    length: 50,
    // generated: ,
    postgresql: {columnName: 'category_code', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  categoryCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Categorys>) {
    super(data);
  }
}

export interface CategorysRelations {
  // describe navigational properties here
}

export type CategorysWithRelations = Categorys & CategorysRelations;
