"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_AZLE_BIN_DIR = exports.GLOBAL_AZLE_TARGET_DIR = exports.GLOBAL_AZLE_RUST_BIN_DIR = exports.GLOBAL_AZLE_RUST_DIR = exports.GLOBAL_AZLE_CONFIG_DIR = void 0;
const path_1 = require("path");
const package_json_1 = require("../../../package.json");
exports.GLOBAL_AZLE_CONFIG_DIR = (0, path_1.resolve)(require('os').homedir(), (0, path_1.join)('.config', 'azle'));
exports.GLOBAL_AZLE_RUST_DIR = (0, path_1.join)(exports.GLOBAL_AZLE_CONFIG_DIR, 'rust', package_json_1.rust_version);
exports.GLOBAL_AZLE_RUST_BIN_DIR = (0, path_1.join)(exports.GLOBAL_AZLE_RUST_DIR, 'bin');
exports.GLOBAL_AZLE_TARGET_DIR = (0, path_1.join)(exports.GLOBAL_AZLE_CONFIG_DIR, 'rust', 'target');
exports.GLOBAL_AZLE_BIN_DIR = (0, path_1.join)(exports.GLOBAL_AZLE_CONFIG_DIR, package_json_1.version, 'bin');
