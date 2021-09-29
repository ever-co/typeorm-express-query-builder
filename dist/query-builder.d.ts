import { ExpressQuery } from './express-query';
import { FindManyOptions } from 'typeorm';
export declare class QueryBuilder {
    private expressQuery;
    private typeORMQuery;
    private readonly findOptions;
    private readonly filterFactory;
    constructor(expressQuery: ExpressQuery);
    build(): FindManyOptions;
}
