"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsCollection = void 0;
const order_option_1 = require("./order-option");
const pagination_option_1 = require("./pagination-option");
const relations_option_1 = require("./relations-option");
const select_option_1 = require("./select-option");
class OptionsCollection {
    constructor() {
        this.options = [
            new pagination_option_1.PaginationOption(),
            new order_option_1.OrderOption(),
            new relations_option_1.RelationsOption(),
            new select_option_1.SelectOption(),
        ];
    }
}
exports.OptionsCollection = OptionsCollection;
//# sourceMappingURL=container.js.map