"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const compile_rust_code_1 = require("./compile_rust_code");
const install_rust_dependencies_1 = require("./install_rust_dependencies");
const new_command_1 = require("./new_command");
const utils_1 = require("./utils");
const colors_1 = require("./utils/colors");
const utils_2 = require("./utils");
const package_json_1 = require("../../package.json");
const compile_typescript_code_1 = require("./compile_typescript_code");
const result_1 = require("./utils/result");
const generate_cargo_toml_files_1 = require("./generate_cargo_toml_files");
const generate_candid_and_canister_methods_1 = require("./generate_candid_and_canister_methods");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
azle();
async function azle() {
    if (process.argv[2] === 'new') {
        (0, new_command_1.generateNewAzleProject)(package_json_1.version, package_json_1.dfx_version);
        return;
    }
    if (process.argv[2] === 'clean') {
        (0, fs_1.rmSync)(utils_2.GLOBAL_AZLE_CONFIG_DIR, {
            recursive: true,
            force: true
        });
        return;
    }
    const stdioType = (0, utils_1.getStdIoType)();
    const canisterName = (0, utils_1.unwrap)((0, utils_1.getCanisterName)(process.argv));
    const canisterPath = (0, path_1.join)('.azle', canisterName);
    await (0, utils_1.time)(`\nBuilding canister ${(0, colors_1.green)(canisterName)}`, 'default', async () => {
        const canisterConfig = (0, utils_1.unwrap)((0, utils_1.getCanisterConfig)(canisterName));
        const candidPath = canisterConfig.candid;
        (0, utils_1.printFirstBuildWarning)();
        (0, install_rust_dependencies_1.installRustDependencies)(package_json_1.version, package_json_1.rust_version);
        const compilationResult = (0, compile_typescript_code_1.compileTypeScriptToJavaScript)(canisterConfig.main, canisterConfig);
        if (!(0, result_1.ok)(compilationResult)) {
            const azleErrorResult = compilationErrorToAzleErrorResult(compilationResult.err);
            (0, utils_1.unwrap)(azleErrorResult);
        }
        const canisterJavaScript = compilationResult.ok;
        const workspaceCargoToml = (0, generate_cargo_toml_files_1.generateWorkspaceCargoToml)(canisterConfig.opt_level ?? '0');
        const { candid, canisterMethods } = (0, generate_candid_and_canister_methods_1.generateCandidAndCanisterMethods)(canisterJavaScript);
        (0, fs_1.rmSync)(canisterPath, { recursive: true, force: true });
        (0, fs_1.mkdirSync)(canisterPath, { recursive: true });
        (0, fs_1.writeFileSync)(`${canisterPath}/Cargo.toml`, workspaceCargoToml);
        // TODO not sure what to do about the cargo.lock
        // writeFileSync(`${canisterPath}/Cargo.lock`, workspaceCargoLock);
        if (!(0, fs_1.existsSync)(`${canisterPath}/canister`)) {
            (0, fs_1.mkdirSync)(`${canisterPath}/canister`);
        }
        (0, fs_extra_1.copySync)(`${__dirname}/rust/canister`, `${canisterPath}/canister`);
        if (!(0, fs_1.existsSync)(`${canisterPath}/canister_methods`)) {
            (0, fs_1.mkdirSync)(`${canisterPath}/canister_methods`);
        }
        (0, fs_extra_1.copySync)(`${__dirname}/rust/canister_methods`, `${canisterPath}/canister_methods`);
        (0, fs_1.writeFileSync)(`${canisterPath}/canister/src/main.js`, canisterJavaScript);
        (0, fs_1.writeFileSync)(candidPath, candid); // This is for the dfx.json candid property
        (0, fs_1.writeFileSync)(`${canisterPath}/canister/src/candid.did`, candid); // This is for the Rust canister to have access to the candid file
        const compilerInfo = {
            // TODO The spread is because canisterMethods is a function with properties
            canister_methods: {
                ...canisterMethods
            } // TODO we should probably just grab the props out that we need
        };
        const compilerInfoPath = (0, path_1.join)(canisterPath, 'canister', 'src', 'compiler_info.json');
        // TODO why not just write the dfx.json file here as well?
        (0, fs_1.writeFileSync)(compilerInfoPath, JSON.stringify(compilerInfo));
        (0, compile_rust_code_1.compileRustCode)(canisterName, canisterPath, stdioType);
    });
    (0, utils_1.logSuccess)(canisterPath, canisterName);
}
function compilationErrorToAzleErrorResult(error) {
    if (isTsCompilationError(error)) {
        const firstError = error.errors[0];
        const codeSnippet = generateVisualDisplayOfErrorLocation(firstError.location);
        return (0, result_1.Err)({
            error: `TypeScript error: ${firstError.text}`,
            suggestion: codeSnippet,
            exitCode: 5
        });
    }
    else {
        return (0, result_1.Err)({
            error: `Unable to compile TS to JS: ${error}`,
            exitCode: 6
        });
    }
}
function isTsCompilationError(error) {
    if (error &&
        typeof error === 'object' &&
        'stack' in error &&
        'message' in error &&
        'errors' in error &&
        'warnings' in error) {
        return true;
    }
    return false;
}
function generateVisualDisplayOfErrorLocation(location) {
    const { file, line, column, lineText } = location;
    const marker = (0, colors_1.red)('^'.padStart(column + 1));
    const preciseLocation = (0, colors_1.dim)(`${file}:${line}:${column}`);
    const previousLine = line > 1
        ? (0, colors_1.dim)(`${(line - 1).toString().padStart(line.toString().length)}| `)
        : '';
    const offendingLine = `${(0, colors_1.dim)(`${line}| `)}${lineText}`;
    const subsequentLine = `${(0, colors_1.dim)(`${(line + 1).toString().padStart(line.toString().length)}| `)}${marker}`;
    return `${preciseLocation}\n${previousLine}\n${offendingLine}\n${subsequentLine}`;
}
