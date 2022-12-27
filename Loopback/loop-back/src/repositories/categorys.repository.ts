import { inject } from "@loopback/core";
import { DefaultCrudRepository } from "@loopback/repository";
import { DbDataSource } from "../datasources";
import { Categorys, CategorysRelations } from "../models";


export class CategorysRepository extends DefaultCrudRepository<Categorys, typeof Categorys.prototype.productId, CategorysRelations> {
    constructor(@inject('datasources.db') dataSource: DbDataSource) {
        super(Categorys, dataSource)
    }
}