"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableBTreeMap = void 0;
const opt_1 = require("../candid/types/constructed/opt");
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const serde_1 = require("../candid/serde");
const stable_json_1 = require("./stable_json");
function StableBTreeMap(memoryIdNumber, keySerializable = stable_json_1.stableJson, valueSerializable = stable_json_1.stableJson) {
    const memoryId = memoryIdNumber.toString();
    if (globalThis._azleIc !== undefined) {
        globalThis._azleIc.stableBTreeMapInit(memoryId);
    }
    isSerializable(keySerializable);
    isSerializable(valueSerializable);
    return {
        /**
         * Checks if the given key exists in the map.
         * @param key the key to check.
         * @returns `true` if the key exists in the map, `false` otherwise.
         */
        containsKey(key) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedKey = keySerializable.toBytes(key).buffer;
            return globalThis._azleIc.stableBTreeMapContainsKey(memoryId, encodedKey);
        },
        /**
         * Retrieves the value stored at the provided key.
         * @param key the location from which to retrieve.
         * @returns the value associated with the given key, if it exists.
         */
        get(key) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedKey = keySerializable.toBytes(key).buffer;
            const encodedResult = globalThis._azleIc.stableBTreeMapGet(memoryId, encodedKey);
            if (encodedResult === undefined) {
                return opt_1.None;
            }
            else {
                return (0, opt_1.Some)(valueSerializable.fromBytes(new Uint8Array(encodedResult)));
            }
        },
        /**
         * Inserts a value into the map at the provided key.
         * @param key the location at which to insert.
         * @param value the value to insert.
         * @returns the previous value of the key, if present.
         */
        insert(key, value) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedKey = keySerializable.toBytes(key).buffer;
            const encodedValue = valueSerializable.toBytes(value).buffer;
            const encodedResult = globalThis._azleIc.stableBTreeMapInsert(memoryId, encodedKey, encodedValue);
            if (encodedResult === undefined) {
                return opt_1.None;
            }
            else {
                return (0, opt_1.Some)(valueSerializable.fromBytes(new Uint8Array(encodedResult)));
            }
        },
        /**
         * Checks if the map is empty.
         * @returns `true` if the map contains no elements, `false` otherwise.
         */
        isEmpty() {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            return globalThis._azleIc.stableBTreeMapIsEmpty(memoryId);
        },
        /**
         * Retrieves the items in the map in sorted order.
         * @param startIndex the starting index to begin retrieval
         * @param length the number of items to retrieve
         * @returns tuples representing key/value pairs.
         */
        items(startIndex, length) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedItems = globalThis._azleIc.stableBTreeMapItems(memoryId, startIndex?.toString() ?? '0', length?.toString() ?? 'NOT_SET');
            // TODO too much copying
            return encodedItems.map(([encodedKey, encodedValue]) => {
                return [
                    keySerializable.fromBytes(new Uint8Array(encodedKey)),
                    valueSerializable.fromBytes(new Uint8Array(encodedValue))
                ];
            });
        },
        /**
         * The keys for each element in the map in sorted order.
         * @param startIndex the starting index to begin retrieval
         * @param length the number of keys to retrieve
         * @returns they keys in the map.
         */
        keys(startIndex, length) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedKeys = globalThis._azleIc.stableBTreeMapKeys(memoryId, startIndex?.toString() ?? '0', length?.toString() ?? 'NOT_SET');
            // TODO too much copying
            return encodedKeys.map((encodedKey) => {
                return keySerializable.fromBytes(new Uint8Array(encodedKey));
            });
        },
        /**
         * Checks to see how many elements are in the map.
         * @returns the number of elements in the map.
         */
        len() {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const candidEncodedLen = globalThis._azleIc.stableBTreeMapLen(memoryId);
            // TODO let's try just using a simple string instead of decode considering how expensive decode is
            return (0, serde_1.decode)(nat64_1.nat64, candidEncodedLen);
        },
        /**
         * Removes a key from the map.
         * @param key the location from which to remove.
         * @returns the previous value at the key if it exists, `null` otherwise.
         */
        remove(key) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedKey = keySerializable.toBytes(key).buffer;
            const encodedValue = globalThis._azleIc.stableBTreeMapRemove(memoryId, encodedKey);
            if (encodedValue === undefined) {
                return opt_1.None;
            }
            else {
                return (0, opt_1.Some)(valueSerializable.fromBytes(new Uint8Array(encodedValue)));
            }
        },
        /**
         * The values in the map in sorted order.
         * @param startIndex the starting index to begin retrieval
         * @param length the number of values to retrieve
         * @returns the values in the map.
         */
        values(startIndex, length) {
            if (globalThis._azleIc === undefined) {
                return undefined;
            }
            const encodedValues = globalThis._azleIc.stableBTreeMapValues(memoryId, startIndex?.toString() ?? '0', length?.toString() ?? 'NOT_SET');
            // TODO too much copying
            return encodedValues.map((encodedValue) => {
                return valueSerializable.fromBytes(new Uint8Array(encodedValue));
            });
        }
    };
}
exports.StableBTreeMap = StableBTreeMap;
function isSerializable(obj) {
    if (obj.toBytes === undefined) {
        throw new Error(`value must have a toBytes method`);
    }
    if (obj.fromBytes === undefined) {
        throw new Error(`value must have a fromBytes method`);
    }
}
