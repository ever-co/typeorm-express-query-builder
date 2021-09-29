import { ExpressQuery } from '../express-query';
import { LookupFilter } from './field/lookup.enum';
export declare abstract class AbstractFilter {
    readonly prop: string;
    readonly lookup: LookupFilter;
    readonly value: string;
    query: ExpressQuery;
    constructor(query: ExpressQuery, prop: string, lookup: LookupFilter, value: string);
    abstract buildQuery(): void;
}
