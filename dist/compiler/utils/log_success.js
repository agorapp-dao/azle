"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSuccess = void 0;
const colors_1 = require("./colors");
function logSuccess(canisterPath, canisterName) {
    console.info(`\n🎉 Built canister ${(0, colors_1.green)(canisterName)} ${(0, colors_1.dim)(`at ${canisterPath}/${canisterName}.wasm\n`)}`);
}
exports.logSuccess = logSuccess;
