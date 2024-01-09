"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dim = exports.purple = exports.blue = exports.green = exports.yellow = exports.red = void 0;
function red(text) {
    return `\x1b[31m${text}\x1b[0m`;
}
exports.red = red;
function yellow(text) {
    return `\x1b[33m${text}\x1b[0m`;
}
exports.yellow = yellow;
function green(text) {
    return `\x1b[32m${text}\x1b[0m`;
}
exports.green = green;
function blue(text) {
    return `\x1b[34m${text}\x1b[0m`;
}
exports.blue = blue;
function purple(text) {
    return `\x1b[35m${text}\x1b[0m`;
}
exports.purple = purple;
function dim(text) {
    return `\x1b[2m${text}\x1b[0m`;
}
exports.dim = dim;
