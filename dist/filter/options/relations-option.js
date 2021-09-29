"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationsOption = void 0;
const filter_option_1 = require("./filter-option");
class RelationsOption extends filter_option_1.FilterOption {
    setOption(query) {
        if (!query.source['with']) {
            return;
        }
        const relations = query.source['with'].split(',');
        query.target['relations'] = relations;
        delete query.source['with'];
    }
}
exports.RelationsOption = RelationsOption;
//# sourceMappingURL=relations-option.js.map