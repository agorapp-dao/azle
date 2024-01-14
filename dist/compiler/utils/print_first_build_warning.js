"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFirstBuildWarning = void 0;
const fs_1 = require("fs");
const global_paths_1 = require("./global_paths");
const colors_1 = require("./colors");
// TODO I think we should just print something out every 30 seconds saying that it's still going
function printFirstBuildWarning() {
    if (isInitialCompile()) {
        console.info((0, colors_1.yellow)("\nInitial build takes a few minutes. Don't panic. Subsequent builds will be faster."));
    }
}
exports.printFirstBuildWarning = printFirstBuildWarning;
function isInitialCompile() {
    return !(0, fs_1.existsSync)(global_paths_1.GLOBAL_AZLE_TARGET_DIR);
}
