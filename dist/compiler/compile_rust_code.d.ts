/// <reference types="node" />
import { IOType } from 'child_process';
export declare function compileRustCode(canisterName: string, canisterPath: string, stdio: IOType, cargoFlags?: {
    release?: boolean;
    offline?: boolean;
}): Promise<void>;
