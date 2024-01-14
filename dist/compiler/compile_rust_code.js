"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRustCode = void 0;
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const utils_1 = require("./utils");
const exec_1 = require("./utils/exec");
async function compileRustCode(canisterName, canisterPath, stdio, cargoFlags) {
    cargoFlags = {
        release: true,
        offline: false,
        ...cargoFlags
    };
    const flags = Object.keys(cargoFlags)
        .filter((flag) => cargoFlags?.[flag])
        .map((flag) => '--' + flag);
    await (0, exec_1.exec)(`${utils_1.GLOBAL_AZLE_RUST_BIN_DIR}/cargo`, [`build`, `--target`, `wasm32-wasi`, `--manifest-path`, `canister/Cargo.toml`, ...flags], {
        cwd: canisterPath,
        stdio,
        env: {
            ...process.env,
            CARGO_TARGET_DIR: utils_1.GLOBAL_AZLE_TARGET_DIR,
            CARGO_HOME: utils_1.GLOBAL_AZLE_RUST_DIR,
            RUSTUP_HOME: utils_1.GLOBAL_AZLE_RUST_DIR,
            CARGO_REGISTRIES_CRATES_IO_PROTOCOL: 'sparse'
            // TODO this allows changing the stack size, could be useful for stack overflow or heap out of bounds errors
            // RUSTFLAGS: '-C link-args=-zstack-size=2000000000'
        }
    });
    const wasmTargetFilePath = `${utils_1.GLOBAL_AZLE_TARGET_DIR}/wasm32-wasi/${cargoFlags.release ? 'release' : 'debug'}/canister.wasm`;
    await (0, fs_extra_1.copy)(wasmTargetFilePath, (0, path_1.join)(canisterPath, (0, path_1.basename)(wasmTargetFilePath)));
    await (0, exec_1.exec)(`${utils_1.GLOBAL_AZLE_RUST_BIN_DIR}/wasi2ic`, [`canister.wasm`, `${canisterName}.wasm`], {
        cwd: canisterPath,
        stdio,
        env: {
            ...process.env,
            CARGO_TARGET_DIR: utils_1.GLOBAL_AZLE_TARGET_DIR,
            CARGO_HOME: utils_1.GLOBAL_AZLE_RUST_DIR,
            RUSTUP_HOME: utils_1.GLOBAL_AZLE_RUST_DIR
        }
    });
}
exports.compileRustCode = compileRustCode;
