import { inject } from "@loopback/core";
import { DefaultCrudRepository } from "@loopback/repository";
import { DbDataSource } from "../datasources";
import { Customers, CustomersRelations } from "../models";


export class CustomersRepository extends DefaultCrudRepository<Customers, typeof Customers.prototype.customerId, CustomersRelations> {
    constructor(@inject('datasources.db') dataSource: DbDataSource) {
        super(Customers, dataSource)
    }
}