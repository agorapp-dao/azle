import { Opt } from '../candid/types/constructed/opt';
import { nat64 } from '../candid/types/primitive/nats/nat64';
import { nat8 } from '../candid/types/primitive/nats/nat8';
export interface Serializable {
    toBytes: (data: any) => Uint8Array;
    fromBytes: (bytes: Uint8Array) => any;
}
export declare function StableBTreeMap<Key = any, Value = any>(memoryIdNumber: nat8, keySerializable?: Serializable, valueSerializable?: Serializable): {
    /**
     * Checks if the given key exists in the map.
     * @param key the key to check.
     * @returns `true` if the key exists in the map, `false` otherwise.
     */
    containsKey(key: Key): boolean;
    /**
     * Retrieves the value stored at the provided key.
     * @param key the location from which to retrieve.
     * @returns the value associated with the given key, if it exists.
     */
    get(key: Key): Opt<Value>;
    /**
     * Inserts a value into the map at the provided key.
     * @param key the location at which to insert.
     * @param value the value to insert.
     * @returns the previous value of the key, if present.
     */
    insert(key: Key, value: Value): Opt<Value>;
    /**
     * Checks if the map is empty.
     * @returns `true` if the map contains no elements, `false` otherwise.
     */
    isEmpty(): boolean;
    /**
     * Retrieves the items in the map in sorted order.
     * @param startIndex the starting index to begin retrieval
     * @param length the number of items to retrieve
     * @returns tuples representing key/value pairs.
     */
    items(startIndex?: number, length?: number): [Key, Value][];
    /**
     * The keys for each element in the map in sorted order.
     * @param startIndex the starting index to begin retrieval
     * @param length the number of keys to retrieve
     * @returns they keys in the map.
     */
    keys(startIndex?: number, length?: number): Key[];
    /**
     * Checks to see how many elements are in the map.
     * @returns the number of elements in the map.
     */
    len(): nat64;
    /**
     * Removes a key from the map.
     * @param key the location from which to remove.
     * @returns the previous value at the key if it exists, `null` otherwise.
     */
    remove(key: Key): Opt<Value>;
    /**
     * The values in the map in sorted order.
     * @param startIndex the starting index to begin retrieval
     * @param length the number of values to retrieve
     * @returns the values in the map.
     */
    values(startIndex?: number, length?: number): Value[];
};
