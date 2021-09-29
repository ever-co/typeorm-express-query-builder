"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOption = void 0;
const filter_option_1 = require("./filter-option");
class OrderOption extends filter_option_1.FilterOption {
    setOption(query) {
        if (!query.source['order']) {
            return;
        }
        const orderFields = query.source['order'].split(',');
        for (const field of orderFields) {
            const orderCriteria = this.getOrderCriteria(field);
            query.target['order'] = Object.assign(Object.assign({}, query.target['order']), { [field.substr(1, field.length)]: orderCriteria });
        }
        delete query.source['order'];
    }
    getOrderCriteria(field) {
        if (field.startsWith('+')) {
            return 'ASC';
        }
        else if (field.startsWith('-')) {
            return 'DESC';
        }
        else {
            throw new Error(`No order set for <${field}>. Prefix with one of these: [+, -]`);
        }
    }
}
exports.OrderOption = OrderOption;
//# sourceMappingURL=order-option.js.map