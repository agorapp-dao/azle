"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileRustCode = void 0;
const child_process_1 = require("child_process");
const utils_1 = require("./utils");
function compileRustCode(canisterName, canisterPath, stdio, cargoFlags) {
    cargoFlags = {
        release: true,
        offline: false,
        ...cargoFlags
    };
    const flags = Object.keys(cargoFlags)
        .filter((flag) => cargoFlags?.[flag])
        .map((flag) => '--' + flag)
        .join(' ');
    (0, child_process_1.execSync)(`cd ${canisterPath} && ${utils_1.GLOBAL_AZLE_RUST_BIN_DIR}/cargo build --target wasm32-wasi --manifest-path canister/Cargo.toml ${flags}`, {
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
    (0, child_process_1.execSync)(`cp ${wasmTargetFilePath} ${canisterPath}`);
    (0, child_process_1.execSync)(`cd ${canisterPath} && ${utils_1.GLOBAL_AZLE_RUST_BIN_DIR}/wasi2ic canister.wasm ${canisterName}.wasm`, {
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
