/// <reference types="node" />
/// <reference types="node" />
import { IOType } from 'child_process';
export declare function exec(cmd: string, args: string[], opts: {
    stdio: IOType;
    cwd: string;
    env: NodeJS.ProcessEnv;
}): Promise<void>;
