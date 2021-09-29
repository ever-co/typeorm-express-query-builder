import { LookupFilter } from "./lookup.enum";
import { FindOptionsUtils } from 'typeorm';
interface BuildQueryFunction {
    build: (prop: string, value: string) => Record<string, FindOptionsUtils>;
}
export declare const LOOKUP_FILTER_MAP: Map<LookupFilter, BuildQueryFunction>;
export {};
