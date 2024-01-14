"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsync = void 0;
function isAsync(originalFunction) {
    if (originalFunction[Symbol.toStringTag] === 'AsyncFunction') {
        return true;
    }
    else if (originalFunction.constructor.name === 'AsyncFunction') {
        return true;
    }
    else if (originalFunction.toString().includes('async ')) {
        return true;
    }
    else {
        return false;
    }
}
exports.isAsync = isAsync;
