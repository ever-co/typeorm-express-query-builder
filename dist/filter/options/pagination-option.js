"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationOption = void 0;
const default_config_1 = require("../../default-config");
const filter_option_1 = require("./filter-option");
class PaginationOption extends filter_option_1.FilterOption {
    setOption(query) {
        if (query.source['pagination'] === undefined ||
            query.source['pagination'] === true) {
            query.target['skip'] = (query.source['page'] && query.source['page'] > 1)
                ? (query.source['page'] - 1) * (query.source['limit'] || default_config_1.ITEMS_PER_PAGE)
                : 0;
            delete query.source['page'];
            query.target['take'] = (query.source['limit'] && query.source['limit'] > 0)
                ? query.source['limit']
                : default_config_1.ITEMS_PER_PAGE;
            delete query.source['limit'];
        }
        delete query.source['pagination'];
    }
}
exports.PaginationOption = PaginationOption;
//# sourceMappingURL=pagination-option.js.map