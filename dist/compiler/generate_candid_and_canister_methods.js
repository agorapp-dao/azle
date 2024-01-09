"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCandidAndCanisterMethods = void 0;
const visitor_1 = require("../lib/candid/did_file/visitor");
const did_file_1 = require("../lib/candid/did_file");
function generateCandidAndCanisterMethods(mainJs) {
    const vm = require('vm');
    const sandbox = {
        globalThis: {},
        window: {},
        self: {},
        global: {},
        crypto: {
            getRandomValues: () => {
                let array = new Uint8Array(32);
                for (let i = 0; i < array.length; i++) {
                    array[i] = Math.floor(Math.random() * 256);
                }
                return array;
            }
        },
        exports: {},
        console,
        TextDecoder,
        TextEncoder
    };
    const context = new vm.createContext(sandbox);
    const script = new vm.Script(mainJs);
    script.runInContext(context);
    const canisterMethods = sandbox.exports.canisterMethods;
    const candidInfo = canisterMethods.getIdl([]).accept(new visitor_1.DidVisitor(), {
        ...(0, visitor_1.getDefaultVisitorData)(),
        isFirstService: true,
        systemFuncs: canisterMethods.getSystemFunctionIdls()
    });
    return {
        candid: (0, did_file_1.toDidString)(candidInfo),
        canisterMethods: canisterMethods
    };
}
exports.generateCandidAndCanisterMethods = generateCandidAndCanisterMethods;
