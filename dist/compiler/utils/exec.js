"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const child_process_1 = require("child_process");
function exec(cmd, args, opts) {
    return new Promise((resolve, reject) => {
        const p = (0, child_process_1.spawn)(cmd, args, { stdio: opts.stdio, cwd: opts.cwd, env: opts.env });
        p.on('close', (code) => {
            code === 0
                ? resolve()
                : reject(new Error(`Command ${cmd}, ${args} failed with ${code}`));
        });
    });
}
exports.exec = exec;
