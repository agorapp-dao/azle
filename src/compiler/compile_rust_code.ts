import { IOType } from 'child_process';
import { join, basename } from 'path';
import { copy } from 'fs-extra';
import {
    GLOBAL_AZLE_RUST_DIR,
    GLOBAL_AZLE_RUST_BIN_DIR,
    GLOBAL_AZLE_TARGET_DIR,
    time
} from './utils';
import { exec } from './utils/exec';

export async function compileRustCode(
    canisterName: string,
    canisterPath: string,
    stdio: IOType,
    cargoFlags?: { release?: boolean; offline?: boolean }
) {
    cargoFlags = {
        release: true,
        offline: false,
        ...cargoFlags
    };

    const flags = Object.keys(cargoFlags)
        .filter((flag) => cargoFlags?.[flag as keyof typeof cargoFlags])
        .map((flag) => '--' + flag);

    await exec(
        `${GLOBAL_AZLE_RUST_BIN_DIR}/cargo`,
        [
            `build`,
            `--target`,
            `wasm32-wasi`,
            `--manifest-path`,
            `canister/Cargo.toml`,
            ...flags
        ],
        {
            cwd: canisterPath,
            stdio,
            env: {
                ...process.env,
                CARGO_TARGET_DIR: GLOBAL_AZLE_TARGET_DIR,
                CARGO_HOME: GLOBAL_AZLE_RUST_DIR,
                RUSTUP_HOME: GLOBAL_AZLE_RUST_DIR,
                CARGO_REGISTRIES_CRATES_IO_PROTOCOL: 'sparse'
                // TODO this allows changing the stack size, could be useful for stack overflow or heap out of bounds errors
                // RUSTFLAGS: '-C link-args=-zstack-size=2000000000'
            }
        }
    );

    const wasmTargetFilePath = `${GLOBAL_AZLE_TARGET_DIR}/wasm32-wasi/${
        cargoFlags.release ? 'release' : 'debug'
    }/canister.wasm`;

    await copy(
        wasmTargetFilePath,
        join(canisterPath, basename(wasmTargetFilePath))
    );

    await exec(
        `${GLOBAL_AZLE_RUST_BIN_DIR}/wasi2ic`,
        [`canister.wasm`, `${canisterName}.wasm`],
        {
            cwd: canisterPath,
            stdio,
            env: {
                ...process.env,
                CARGO_TARGET_DIR: GLOBAL_AZLE_TARGET_DIR,
                CARGO_HOME: GLOBAL_AZLE_RUST_DIR,
                RUSTUP_HOME: GLOBAL_AZLE_RUST_DIR
            }
        }
    );
}
