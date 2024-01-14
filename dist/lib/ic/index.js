"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ic = void 0;
const accept_message_1 = require("./accept_message");
const arg_data_raw_1 = require("./arg_data_raw");
const arg_data_raw_size_1 = require("./arg_data_raw_size");
const call_1 = require("./call");
const call_raw_1 = require("./call_raw");
const call_raw_128_1 = require("./call_raw_128");
const caller_1 = require("./caller");
const candid_decode_1 = require("./candid_decode");
const candid_encode_1 = require("./candid_encode");
const canister_balance_1 = require("./canister_balance");
const canister_balance_128_1 = require("./canister_balance_128");
const canister_version_1 = require("./canister_version");
const clear_timer_1 = require("./clear_timer");
const data_certificate_1 = require("./data_certificate");
const id_1 = require("./id");
const instruction_counter_1 = require("./instruction_counter");
const is_controller_1 = require("./is_controller");
const method_name_1 = require("./method_name");
const msg_cycles_accept_1 = require("./msg_cycles_accept");
const msg_cycles_accept_128_1 = require("./msg_cycles_accept_128");
const msg_cycles_available_1 = require("./msg_cycles_available");
const msg_cycles_available_128_1 = require("./msg_cycles_available_128");
const msg_cycles_refunded_1 = require("./msg_cycles_refunded");
const msg_cycles_refunded_128_1 = require("./msg_cycles_refunded_128");
const notify_1 = require("./notify");
const notify_raw_1 = require("./notify_raw");
const performance_counter_1 = require("./performance_counter");
const print_1 = require("./print");
const reject_1 = require("./reject");
const reject_code_1 = require("./reject_code");
const reject_message_1 = require("./reject_message");
const reply_1 = require("./reply");
const reply_raw_1 = require("./reply_raw");
const set_certified_data_1 = require("./set_certified_data");
const set_timer_1 = require("./set_timer");
const set_timer_interval_1 = require("./set_timer_interval");
const stable_64_grow_1 = require("./stable_64_grow");
const stable_64_read_1 = require("./stable_64_read");
const stable_64_size_1 = require("./stable_64_size");
const stable_64_write_1 = require("./stable_64_write");
const stable_bytes_1 = require("./stable_bytes");
const stable_grow_1 = require("./stable_grow");
const stable_read_1 = require("./stable_read");
const stable_size_1 = require("./stable_size");
const stable_write_1 = require("./stable_write");
const time_1 = require("./time");
const trap_1 = require("./trap");
__exportStar(require("./types"), exports);
/** API entrypoint for interacting with the Internet Computer */
exports.ic = {
    acceptMessage: accept_message_1.acceptMessage,
    argDataRawSize: arg_data_raw_size_1.argDataRawSize,
    argDataRaw: arg_data_raw_1.argDataRaw,
    call: call_1.call,
    callRaw: call_raw_1.callRaw,
    callRaw128: call_raw_128_1.callRaw128,
    caller: caller_1.caller,
    candidDecode: candid_decode_1.candidDecode,
    candidEncode: candid_encode_1.candidEncode,
    canisterBalance: canister_balance_1.canisterBalance,
    canisterBalance128: canister_balance_128_1.canisterBalance128,
    canisterVersion: canister_version_1.canisterVersion,
    clearTimer: clear_timer_1.clearTimer,
    dataCertificate: data_certificate_1.dataCertificate,
    id: id_1.id,
    instructionCounter: instruction_counter_1.instructionCounter,
    isController: is_controller_1.isController,
    methodName: method_name_1.methodName,
    msgCyclesAccept: msg_cycles_accept_1.msgCyclesAccept,
    msgCyclesAccept128: msg_cycles_accept_128_1.msgCyclesAccept128,
    msgCyclesAvailable: msg_cycles_available_1.msgCyclesAvailable,
    msgCyclesAvailable128: msg_cycles_available_128_1.msgCyclesAvailable128,
    msgCyclesRefunded: msg_cycles_refunded_1.msgCyclesRefunded,
    msgCyclesRefunded128: msg_cycles_refunded_128_1.msgCyclesRefunded128,
    notify: notify_1.notify,
    notifyRaw: notify_raw_1.notifyRaw,
    performanceCounter: performance_counter_1.performanceCounter,
    print: print_1.print,
    reject: reject_1.reject,
    rejectCode: reject_code_1.rejectCode,
    rejectMessage: reject_message_1.rejectMessage,
    reply: reply_1.reply,
    replyRaw: reply_raw_1.replyRaw,
    setCertifiedData: set_certified_data_1.setCertifiedData,
    setTimer: set_timer_1.setTimer,
    setTimerInterval: set_timer_interval_1.setTimerInterval,
    stableBytes: stable_bytes_1.stableBytes,
    stableGrow: stable_grow_1.stableGrow,
    stableRead: stable_read_1.stableRead,
    stableSize: stable_size_1.stableSize,
    stableWrite: stable_write_1.stableWrite,
    stable64Grow: stable_64_grow_1.stable64Grow,
    stable64Read: stable_64_read_1.stable64Read,
    stable64Size: stable_64_size_1.stable64Size,
    stable64Write: stable_64_write_1.stable64Write,
    time: time_1.time,
    trap: trap_1.trap
};
