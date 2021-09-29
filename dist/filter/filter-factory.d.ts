import { AbstractFilter } from './filter';
import { TypeORMQuery } from '../typeorm-query';
interface FilterFactoryQuery {
    query: TypeORMQuery;
    key: string;
    value: string;
}
export declare class FilterFactory {
    get(query: FilterFactoryQuery): AbstractFilter;
    private isFieldFilter;
}
export {};
