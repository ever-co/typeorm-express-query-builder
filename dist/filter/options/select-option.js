"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOption = void 0;
const filter_option_1 = require("./filter-option");
class SelectOption extends filter_option_1.FilterOption {
    setOption(query) {
        if (!query.source['select']) {
            return;
        }
        const fields = query.source['select'].split(',');
        query.target['select'] = fields;
        delete query.source['select'];
    }
}
exports.SelectOption = SelectOption;
//# sourceMappingURL=select-option.js.map