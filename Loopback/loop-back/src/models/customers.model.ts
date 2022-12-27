import { Entity, model, property } from '@loopback/repository';

@model({
  settings: { idInjection: false, postgresql: { schema: 'public', table: 'customers' } }
})
export class Customers extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: { columnName: 'customer_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined },
  })
  customerId: number;

  @property({
    type: 'string',
    required: true,
    length: 255,
    generated: true,
    postgresql: { columnName: 'customer_name', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined },
  })
  customerName: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customers>) {
    super(data);
  }
}

export interface CustomersRelations {
  // describe navigational properties here
}

export type CustomersWithRelations = Customers & CustomersRelations;
