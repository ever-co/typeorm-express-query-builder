import { AbstractFilter } from '../filter';
import { LookupFilter } from './lookup.enum';
import { ExpressQuery } from '../../express-query';
interface FilterConfig {
    query: ExpressQuery;
    prop: string;
    lookup: LookupFilter;
    value: string;
    notOperator?: boolean;
}
export declare class FieldFilter extends AbstractFilter {
    private notOperator;
    constructor(config: FilterConfig);
    buildQuery(): void;
    private setQuery;
}
export {};
