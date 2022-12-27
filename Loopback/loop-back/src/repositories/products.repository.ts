import { inject } from "@loopback/core";
import { DefaultCrudRepository } from "@loopback/repository";
import { DbDataSource } from "../datasources";
import { Products, ProductsRelations } from "../models";

export class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.productId, ProductsRelations> {
    constructor(@inject('datasources.db') dataSource: DbDataSource) {
        super(Products, dataSource)
    }
}