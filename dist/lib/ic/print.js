"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
/**
 * Prints the given message
 * @param args the message to print
 */
function print(...args) {
    return globalThis._azleIc ? globalThis._azleIc.print(...args) : undefined;
}
exports.print = print;
