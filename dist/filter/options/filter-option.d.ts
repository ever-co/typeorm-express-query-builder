import { TypeORMQuery } from "../../typeorm-query";
import { ExpressQuery } from "../../express-query";
export interface FilterOptionQuery {
    source: ExpressQuery;
    target: TypeORMQuery;
}
export declare abstract class FilterOption {
    abstract setOption(query: FilterOptionQuery): void;
}
