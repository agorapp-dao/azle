"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ic_1 = require("./ic");
const buffer_1 = require("buffer");
const stable_json_1 = require("./stable_structures/stable_json");
if (globalThis._azleIc) {
    globalThis.console = {
        ...globalThis.console,
        log: (...args) => {
            const jsonStringifiedArgs = args
                .map((arg) => JSON.stringify(arg, stable_json_1.replacer, 4))
                .join(' ');
            ic_1.ic.print(jsonStringifiedArgs);
        }
    };
}
globalThis.TextDecoder = require('text-encoding').TextDecoder;
globalThis.TextEncoder = require('text-encoding').TextEncoder;
globalThis._azleIcTimers = {};
globalThis._azleResolveIds = {};
globalThis._azleRejectIds = {};
globalThis._azleTimerCallbacks = {};
globalThis._azleGuardFunctions = {};
// TODO be careful we are using a random seed of 0 I think
// TODO the randomness is predictable
globalThis.crypto = {
    ...globalThis.crypto,
    getRandomValues: (() => {
        let array = new Uint8Array(32);
        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }
        return array;
    })
};
globalThis.Buffer = buffer_1.Buffer;
