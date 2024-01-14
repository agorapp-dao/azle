"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimer = void 0;
const uuid_1 = require("uuid");
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
const encode_1 = require("../candid/serde/encode");
/**
 * Sets callback to be executed later, after delay. Panics if `delay` + time() is more than 2^64 - 1.
 * To cancel the timer before it executes, pass the returned `TimerId` to `clearTimer`.
 * Note that timers are not persisted across canister upgrades.
 *
 * @param delay The time (in seconds) to wait before executing the provided callback.
 * @param callback the function to invoke after the specified delay has passed.
 * @returns the ID of the created timer. Used to cancel the timer.
 */
function setTimer(delay, callback) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const timerCallbackId = `_timer_${(0, uuid_1.v4)()}`;
    const timerId = (0, decode_1.decode)(nat64_1.nat64, globalThis._azleIc.setTimer((0, encode_1.encode)(nat64_1.nat64, delay).buffer, timerCallbackId));
    globalThis._azleIcTimers[timerId.toString()] = timerCallbackId;
    globalThis._azleTimerCallbacks[timerCallbackId] = () => {
        try {
            callback();
        }
        finally {
            delete globalThis._azleIcTimers[timerId.toString()];
            delete globalThis._azleTimerCallbacks[timerCallbackId];
        }
    };
    return timerId;
}
exports.setTimer = setTimer;
