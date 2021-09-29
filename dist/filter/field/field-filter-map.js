"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOKUP_FILTER_MAP = void 0;
const lookup_enum_1 = require("./lookup.enum");
const typeorm_1 = require("typeorm");
exports.LOOKUP_FILTER_MAP = new Map([
    [
        lookup_enum_1.LookupFilter.EXACT,
        {
            build: (prop, value) => ({ [prop]: value }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.CONTAINS,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.Like)(`%${value}%`) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.STARTS_WITH,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.Like)(`${value}%`) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.ENDS_WITH,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.Like)(`%${value}`) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.IS_NULL,
        {
            build: (prop) => ({ [prop]: (0, typeorm_1.IsNull)() }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.LT,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.LessThan)(value) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.LTE,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.LessThanOrEqual)(value) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.GT,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.MoreThan)(value) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.GTE,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.MoreThanOrEqual)(value) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.IN,
        {
            build: (prop, value) => ({ [prop]: (0, typeorm_1.In)(value.split(',')) }),
        }
    ],
    [
        lookup_enum_1.LookupFilter.BETWEEN,
        {
            build: (prop, value) => {
                const rangeValues = value.split(',');
                return { [prop]: (0, typeorm_1.Between)(+rangeValues[0], +rangeValues[1]) };
            },
        }
    ],
]);
//# sourceMappingURL=field-filter-map.js.map