import { Serializable } from './stable_b_tree_map';
export declare function StableJson(options?: {
    replacer?: typeof replacer;
    reviver?: typeof reviver;
}): Serializable;
export declare const stableJson: Serializable;
export declare function replacer(_key: string, value: any): any;
export declare function reviver(_key: string, value: any): any;
