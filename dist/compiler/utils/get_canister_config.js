"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanisterConfig = void 0;
const fs_1 = require("fs");
const colors_1 = require("./colors");
const result_1 = require("./result");
function getCanisterConfig(canisterName) {
    const exampleDfxJson = colorFormattedDfxJsonExample(canisterName);
    if (!(0, fs_1.existsSync)(`dfx.json`)) {
        return (0, result_1.Err)({
            error: 'Missing dfx.json',
            suggestion: `Create a dfx.json file in the current directory with the following format:\n\n${exampleDfxJson}`,
            exitCode: 2
        });
    }
    const dfxJson = JSON.parse((0, fs_1.readFileSync)('dfx.json').toString());
    const canisterConfig = dfxJson.canisters[canisterName];
    if (!canisterConfig) {
        return (0, result_1.Err)({
            error: `Unable to find canister "${canisterName}" in ./dfx.json`,
            suggestion: `Make sure your dfx.json contains an entry for "${canisterName}". For example:\n\n${exampleDfxJson}`,
            exitCode: 3
        });
    }
    const { main, candid } = canisterConfig;
    if (!main || !candid) {
        const missingFields = [
            ['"main"', main],
            ['"candid"', candid]
        ]
            .filter(([_, value]) => !value)
            .map(([field, _]) => field);
        const fieldOrFields = missingFields.length == 1 ? 'field' : 'fields';
        const missingFieldNames = missingFields.join(', ');
        return (0, result_1.Err)({
            error: `Missing ${fieldOrFields} ${missingFieldNames} in ./dfx.json`,
            suggestion: `Make sure your dfx.json looks similar to the following:\n\n${exampleDfxJson}`,
            exitCode: 4
        });
    }
    return (0, result_1.Ok)(canisterConfig);
}
exports.getCanisterConfig = getCanisterConfig;
function colorFormattedDfxJsonExample(canisterName) {
    return `    ${(0, colors_1.yellow)('{')}
        ${(0, colors_1.red)('"canisters"')}: ${(0, colors_1.purple)('{')}
            ${(0, colors_1.red)(`"${canisterName}"`)}: ${(0, colors_1.blue)('{')}
                ${(0, colors_1.red)('"type"')}: ${(0, colors_1.green)('"custom"')},
                ${(0, colors_1.red)('"main"')}: ${(0, colors_1.green)('"src/index.ts"')},
                ${(0, colors_1.red)('"build"')}: ${(0, colors_1.green)(`"npx azle ${canisterName}"`)},
                ${(0, colors_1.red)('"candid"')}: ${(0, colors_1.green)('"src/index.did"')},
                ${(0, colors_1.red)('"wasm"')}: ${(0, colors_1.green)(`".azle/${canisterName}/${canisterName}.wasm"`)},
            ${(0, colors_1.blue)('}')}
        ${(0, colors_1.purple)('}')}
    ${(0, colors_1.yellow)('}')}`;
}
