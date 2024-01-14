"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installRustDependencies = void 0;
const child_process_1 = require("child_process");
const path_1 = require("path");
function installRustDependencies(azleVersion, rustVersion) {
    const installRustDependenciesPath = (0, path_1.resolve)(__dirname, '../../install_rust_dependencies.sh');
    (0, child_process_1.execSync)(`"${installRustDependenciesPath}" ${azleVersion} ${rustVersion}`, {
        stdio: 'inherit'
    });
}
exports.installRustDependencies = installRustDependencies;
