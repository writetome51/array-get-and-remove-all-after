"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _getAndRemoveAllBefore_or_AfterLast_1 = require("@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterLast");
// value cannot be object.
function getAndRemoveAllAfterLast(value, array) {
    return _getAndRemoveAllBefore_or_AfterLast_1._getAndRemoveAllBefore_or_AfterLast(value, 'after', array);
}
exports.getAndRemoveAllAfterLast = getAndRemoveAllAfterLast;