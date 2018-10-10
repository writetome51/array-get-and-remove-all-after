"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _getAndRemoveAllBefore_or_AfterFirst_1 = require("@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterFirst");
var error_if_not_primitive_or_array_1 = require("error-if-not-primitive-or-array");
// value cannot be object
function getAndRemoveAllAfterFirst(value, array) {
    error_if_not_primitive_or_array_1.errorIfNotPrimitiveOrArray(value);
    return _getAndRemoveAllBefore_or_AfterFirst_1._getAndRemoveAllBefore_or_AfterFirst(value, 'after', array);
}
exports.getAndRemoveAllAfterFirst = getAndRemoveAllAfterFirst;
