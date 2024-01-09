"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimer = void 0;
const timer_id_1 = require("./types/timer_id");
const encode_1 = require("../candid/serde/encode");
/**
 * Cancels an existing timer. Does nothing if the timer has already been canceled.
 * @param id The ID of the timer to be cancelled.
 */
function clearTimer(timerId) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    globalThis._azleIc.clearTimer((0, encode_1.encode)(timer_id_1.TimerId, timerId).buffer);
    const timerCallbackId = globalThis._azleIcTimers[timerId.toString()];
    delete globalThis._azleIcTimers[timerId.toString()];
    delete globalThis._azleTimerCallbacks[timerCallbackId];
}
exports.clearTimer = clearTimer;
