"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeMethod = void 0;
const ic_1 = require("../ic");
const decode_1 = require("../candid/serde/decode");
const encode_1 = require("../candid/serde/encode");
function executeMethod(mode, args, callback, paramCandidTypes, returnCandidType, manual) {
    const decodedArgs = (0, decode_1.decode)(paramCandidTypes, args[0]);
    const result = callback(...decodedArgs);
    if (mode === 'init' ||
        mode === 'postUpgrade' ||
        mode === 'inspectMessage') {
        return;
    }
    if (result !== undefined &&
        result !== null &&
        typeof result.then === 'function') {
        result
            .then((result) => {
            // TODO this won't be accurate because we have most likely had
            // TODO cross-canister calls
            reportFinalInstructions();
            if (!manual) {
                ic_1.ic.replyRaw((0, encode_1.encode)(returnCandidType, result));
            }
        })
            .catch((error) => {
            ic_1.ic.trap(error.toString());
        });
    }
    else {
        if (!manual) {
            ic_1.ic.replyRaw((0, encode_1.encode)(returnCandidType, result));
        }
        reportFinalInstructions();
    }
}
exports.executeMethod = executeMethod;
function reportFinalInstructions() {
    if (process.env.AZLE_INSTRUCTION_COUNT === 'true') {
        console.log(`final instructions: ${ic_1.ic.instructionCounter()}`);
    }
}
