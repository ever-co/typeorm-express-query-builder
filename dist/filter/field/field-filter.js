"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldFilter = void 0;
const field_filter_map_1 = require("./field-filter-map");
const typeorm_1 = require("typeorm");
const filter_1 = require("../filter");
class FieldFilter extends filter_1.AbstractFilter {
    constructor(config) {
        super(config.query, config.prop, config.lookup, config.value);
        this.notOperator = config.notOperator;
    }
    buildQuery() {
        let queryToAdd = {};
        queryToAdd = this.setQuery(queryToAdd);
        if (this.notOperator) {
            queryToAdd[this.prop] = (0, typeorm_1.Not)(queryToAdd[this.prop]);
        }
        this.query['where'] = Object.assign(Object.assign({}, this.query['where']), queryToAdd);
    }
    setQuery(queryToAdd) {
        queryToAdd = field_filter_map_1.LOOKUP_FILTER_MAP.get(this.lookup).build(this.prop, this.value);
        return queryToAdd;
    }
}
exports.FieldFilter = FieldFilter;
//# sourceMappingURL=field-filter.js.map