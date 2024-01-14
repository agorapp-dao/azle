"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanisterName = void 0;
const colors_1 = require("./colors");
const result_1 = require("./result");
const package_json_1 = require("../../../package.json");
function getCanisterName(args) {
    const canisterNames = args.slice(2).filter((arg) => !isCliFlag(arg));
    if (canisterNames.length === 0) {
        return (0, result_1.Err)({ suggestion: `azle v${package_json_1.version}\n\n${getUsageInfo()}` });
    }
    if (canisterNames.length > 1) {
        return (0, result_1.Err)({
            error: 'Too many arguments',
            suggestion: getUsageInfo(),
            exitCode: 1
        });
    }
    const canisterName = canisterNames[0];
    return (0, result_1.Ok)(canisterName);
}
exports.getCanisterName = getCanisterName;
function getUsageInfo() {
    return `Usage: azle ${(0, colors_1.dim)('[-v|--verbose]')} ${(0, colors_1.green)('<canisterName>')}`;
}
function isCliFlag(arg) {
    return arg.startsWith('--') || arg.startsWith('-');
}
