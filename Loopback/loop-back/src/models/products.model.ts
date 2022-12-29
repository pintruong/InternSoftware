import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, postgresql: { schema: 'public', table: 'products' } }
})
export class Products extends Entity {
  @property({
    type: 'number',
    // required: true,
    scale: 0,
    // generated: ,
    id: 1,
    postgresql: { columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined },
  })
  id: number;

  @property({
    type: 'number',
    scale: 0,
    // generated: ,
    postgresql: { columnName: 'category_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  categoryId?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    // generated: ,
    postgresql: { columnName: 'product_code', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  productCode: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    // generated: ,
    postgresql: { columnName: 'product_name', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  productName: string;

  @property({
    type: 'number',
    scale: 0,
    // generated: ,
    postgresql: { columnName: 'product_price', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  productPrice?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
