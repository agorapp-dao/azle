"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVerboseMode = exports.getStdIoType = exports.time = exports.unwrap = exports.printFirstBuildWarning = exports.logSuccess = exports.GLOBAL_AZLE_TARGET_DIR = exports.GLOBAL_AZLE_RUST_BIN_DIR = exports.GLOBAL_AZLE_RUST_DIR = exports.GLOBAL_AZLE_CONFIG_DIR = exports.GLOBAL_AZLE_BIN_DIR = exports.getCanisterName = exports.getCanisterConfig = void 0;
var get_canister_config_1 = require("./get_canister_config");
Object.defineProperty(exports, "getCanisterConfig", { enumerable: true, get: function () { return get_canister_config_1.getCanisterConfig; } });
var get_canister_name_1 = require("./get_canister_name");
Object.defineProperty(exports, "getCanisterName", { enumerable: true, get: function () { return get_canister_name_1.getCanisterName; } });
var global_paths_1 = require("./global_paths");
Object.defineProperty(exports, "GLOBAL_AZLE_BIN_DIR", { enumerable: true, get: function () { return global_paths_1.GLOBAL_AZLE_BIN_DIR; } });
Object.defineProperty(exports, "GLOBAL_AZLE_CONFIG_DIR", { enumerable: true, get: function () { return global_paths_1.GLOBAL_AZLE_CONFIG_DIR; } });
Object.defineProperty(exports, "GLOBAL_AZLE_RUST_DIR", { enumerable: true, get: function () { return global_paths_1.GLOBAL_AZLE_RUST_DIR; } });
Object.defineProperty(exports, "GLOBAL_AZLE_RUST_BIN_DIR", { enumerable: true, get: function () { return global_paths_1.GLOBAL_AZLE_RUST_BIN_DIR; } });
Object.defineProperty(exports, "GLOBAL_AZLE_TARGET_DIR", { enumerable: true, get: function () { return global_paths_1.GLOBAL_AZLE_TARGET_DIR; } });
var log_success_1 = require("./log_success");
Object.defineProperty(exports, "logSuccess", { enumerable: true, get: function () { return log_success_1.logSuccess; } });
var print_first_build_warning_1 = require("./print_first_build_warning");
Object.defineProperty(exports, "printFirstBuildWarning", { enumerable: true, get: function () { return print_first_build_warning_1.printFirstBuildWarning; } });
var result_1 = require("./result");
Object.defineProperty(exports, "unwrap", { enumerable: true, get: function () { return result_1.unwrap; } });
var time_1 = require("./time");
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return time_1.time; } });
function getStdIoType() {
    return isVerboseMode() ? 'inherit' : 'pipe';
}
exports.getStdIoType = getStdIoType;
function isVerboseMode() {
    return process.argv.includes('--verbose') || process.argv.includes('-v');
}
exports.isVerboseMode = isVerboseMode;
