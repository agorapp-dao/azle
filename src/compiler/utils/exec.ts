import { IOType, spawn } from 'child_process';

export function exec(
    cmd: string,
    args: string[],
    opts: { stdio: IOType; cwd?: string; env?: NodeJS.ProcessEnv }
): Promise<void> {
    return new Promise((resolve, reject) => {
        const p = spawn(cmd, args, {
            stdio: opts.stdio,
            cwd: opts.cwd,
            env: opts.env
        });
        p.on('close', (code) => {
            code === 0
                ? resolve()
                : reject(
                      new Error(`Command ${cmd}, ${args} failed with ${code}`)
                  );
        });
    });
}
