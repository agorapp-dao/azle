"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ok = exports.Err = exports.unwrap = exports.ok = void 0;
const colors_1 = require("./colors");
function ok(result) {
    return result.err === undefined;
}
exports.ok = ok;
function unwrap(result) {
    if (!ok(result)) {
        const err = result.err;
        exitWithError(err);
    }
    return result.ok;
}
exports.unwrap = unwrap;
function Err(err) {
    return { err };
}
exports.Err = Err;
function Ok(ok) {
    return { ok };
}
exports.Ok = Ok;
function exitWithError(payload) {
    if (payload.error) {
        console.error(`\n💣 ${(0, colors_1.red)(payload.error)}`);
    }
    if (payload.suggestion) {
        console.error(`\n${payload.suggestion}`);
    }
    console.log(`\n💀 Build failed`);
    process.exit(payload.exitCode ?? 0);
}
