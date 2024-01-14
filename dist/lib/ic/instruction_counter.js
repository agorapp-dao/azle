"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructionCounter = void 0;
/**
 * Returns the number of instructions that the canister executed since the
 * last [entry point](
 *   https://internetcomputer.org/docs/current/references/ic-interface-spec/#entry-points
 * )
 *
 * @returns the number of instructions
 */
function instructionCounter() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const instructionCounterString = globalThis._azleIc.instructionCounter();
    return BigInt(instructionCounterString);
}
exports.instructionCounter = instructionCounter;
