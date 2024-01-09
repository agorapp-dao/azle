"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
const colors_1 = require("./colors");
async function time(label, mode, callback) {
    const startTime = process.hrtime();
    console.info(label);
    const result = await callback();
    const endTime = process.hrtime(startTime);
    const duration = parseHrTimeToSeconds(endTime);
    if (mode === 'inline') {
        const leadingNewLinesCount = (label.match(/^[\n]+/g) || [''])[0].length;
        const cursorUp = `\x1b[${1 + leadingNewLinesCount}A`;
        process.stdout.write(`${cursorUp}${label} ${(0, colors_1.dim)(`${duration}s`)}\n`);
    }
    else {
        console.info(`\nDone in ${duration}s`);
    }
    return result;
}
exports.time = time;
function parseHrTimeToSeconds(hrTime, precision = 2) {
    const seconds = (hrTime[0] + hrTime[1] / 1000000000).toFixed(precision);
    return seconds;
}
