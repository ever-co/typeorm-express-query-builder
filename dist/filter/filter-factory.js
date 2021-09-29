"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterFactory = void 0;
const lookup_enum_1 = require("./field/lookup.enum");
const field_filter_1 = require("./field/field-filter");
class FilterFactory {
    get(query) {
        if (this.isFieldFilter(query.key)) {
            const prop = query.key.split(lookup_enum_1.LookupDelimiter.LOOKUP_DELIMITER)[0];
            const notOperator = query.key.includes(`${lookup_enum_1.LookupDelimiter.LOOKUP_DELIMITER}${lookup_enum_1.LookupFilter.NOT}`);
            const lookup = query.key.includes(lookup_enum_1.LookupDelimiter.LOOKUP_DELIMITER)
                ? query.key.split(lookup_enum_1.LookupDelimiter.LOOKUP_DELIMITER)[notOperator ? 2 : 1]
                : lookup_enum_1.LookupFilter.EXACT;
            return new field_filter_1.FieldFilter({
                query: query.query,
                prop,
                lookup,
                value: query.value,
                notOperator
            });
        }
    }
    isFieldFilter(key) {
        if (!key.includes(lookup_enum_1.LookupDelimiter.RELATION_DELIMITER)) {
            return true;
        }
        return false;
    }
}
exports.FilterFactory = FilterFactory;
//# sourceMappingURL=filter-factory.js.map