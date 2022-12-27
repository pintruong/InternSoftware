import { inject, lifeCycleObserver, LifeCycleObserver } from "@loopback/core";
import { juggler } from "@loopback/repository";

const config = {
    name: 'db',
    url: '',
    connector: 'postgresql',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'api'
}

@lifeCycleObserver('datasource')
export class DbDataSource
    extends juggler.DataSource
    implements LifeCycleObserver {
    static dataSourceName = 'db';
    static readonly defaultConfig = config;

    constructor(
        @inject('datasources.config.db', { optional: true })
        dsConfig: object = config,
    ) {
        super(dsConfig);
    }
}