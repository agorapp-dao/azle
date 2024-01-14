"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitFunc = void 0;
const extract_candid_1 = require("../extract_candid");
function visitFunc(t, didVisitor, data) {
    const argsTypes = t.argTypes.map((value) => value.accept(didVisitor, { ...data, isOnService: false }));
    const candidArgs = (0, extract_candid_1.extractCandid)(argsTypes);
    const retsTypes = t.retTypes.map((value) => value.accept(didVisitor, { ...data, isOnService: false }));
    const candidRets = (0, extract_candid_1.extractCandid)(retsTypes);
    const args = candidArgs[0].join(', ');
    const rets = candidRets[0].join(', ');
    const annon = t.annotations.length === 0 ? '' : ' ' + t.annotations.join(' ');
    return [
        `${data.isOnService ? '' : 'func '}(${args}) -> (${rets})${annon}`,
        { ...candidArgs[1], ...candidRets[1] }
    ];
}
exports.visitFunc = visitFunc;
