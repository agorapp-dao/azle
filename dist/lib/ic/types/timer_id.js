"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerId = void 0;
const nat64_1 = require("../../candid/types/primitive/nats/nat64");
/**
 * Type returned by the {@link ic.setTimer} and {@link ic.setTimerInterval}
 * functions. Pass to {@link ic.clearTimer} to remove the timer.
 */
exports.TimerId = nat64_1.AzleNat64;
