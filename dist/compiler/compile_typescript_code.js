"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleFromString = exports.bundleAndTranspileJs = exports.compileTypeScriptToJavaScript = void 0;
const swc = __importStar(require("@swc/core"));
const esbuild_1 = require("esbuild");
function compileTypeScriptToJavaScript(main, canisterConfig) {
    try {
        const globalThisProcess = `
            globalThis.process = {
                env: {
                    ${(canisterConfig.env ?? [])
            .map((envVarName) => {
            return `'${envVarName}': '${process.env[envVarName]}'`;
        })
            .join(',')}
                }
            };
        `;
        const imports = `
            // Trying to make sure that all globalThis dependencies are defined
            // Before the developer imports azle on their own
            import 'azle';
            import { ic } from 'azle';
            export { Principal } from '@dfinity/principal';
            export * from './${main}';
            import CanisterMethods from './${main}';

            export const canisterMethods = CanisterMethods();

        `;
        const bundledJavaScript = bundleAndTranspileJs(`
            ${globalThisProcess}
            ${imports}
`);
        return {
            ok: bundledJavaScript
        };
    }
    catch (err) {
        return { err };
    }
}
exports.compileTypeScriptToJavaScript = compileTypeScriptToJavaScript;
function bundleAndTranspileJs(ts) {
    const jsBundled = bundleFromString(ts);
    const jsTranspiled = transpile(jsBundled);
    // TODO enabling strict mode is causing lots of issues
    // TODO it would be nice if I could remove strict mode code in esbuild or swc
    // TODO look into the implications of this, but since we are trying to transpile to es3 to cope with missing features in boa, I do not think we need strict mode
    const jsStrictModeRemoved = jsTranspiled.replace(/"use strict";/g, '');
    return jsStrictModeRemoved;
}
exports.bundleAndTranspileJs = bundleAndTranspileJs;
// TODO there is a lot of minification/transpiling etc we could do with esbuild or with swc
// TODO we need to decide which to use for what
function bundleFromString(ts) {
    // TODO tree-shaking does not seem to work with stdin. I have learned this from sad experience
    const buildResult = (0, esbuild_1.buildSync)({
        stdin: {
            contents: ts,
            resolveDir: process.cwd()
        },
        format: 'esm',
        bundle: true,
        treeShaking: true,
        write: false,
        logLevel: 'silent'
        // TODO tsconfig was here to attempt to set importsNotUsedAsValues to true to force Principal to always be bundled
        // TODO now we always bundle Principal for all code, but I am keeping this here in case we run into the problem elsewhere
        // tsconfig: path.join( __dirname, './esbuild-tsconfig.json') // TODO this path resolution may cause problems on non-Linux systems, beware...might not be necessary now that we are using stdin
    });
    const bundleArray = buildResult.outputFiles[0].contents;
    const bundleString = Buffer.from(bundleArray).toString('utf-8');
    return bundleString;
}
exports.bundleFromString = bundleFromString;
// TODO I have left the code for bundleFromPath
// TODO We might run into the situation again where we need to use bundleFromPath
// TODO there are some issues with tree-shaking and possibly some others in bundleFromString, so I will just leave the code here for now until the project is more mature
// function bundleFromPath(tsPath: string): JavaScript {
//     const buildResult = buildSync({
//         entryPoints: [tsPath],
//         format: 'esm',
//         bundle: true,
//         treeShaking: true,
//         write: false,
//         logLevel: 'silent',
//         // TODO tsconfig was here to attempt to set importsNotUsedAsValues to true to force Principal to always be bundled
//         // TODO now we always bundle Principal for all code, but I am keeping this here in case we run into the problem elsewhere
//         // tsconfig: path.join( __dirname, './esbuild-tsconfig.json') // TODO this path resolution may cause problems on non-Linux systems, beware...might not be necessary now that we are using stdin
//     });
//     const bundleArray = buildResult.outputFiles[0].contents;
//     const bundleString = Buffer.from(bundleArray).toString('utf-8');
//     return bundleString;
// }
// TODO there is a lot of minification/transpiling etc we could do with esbuild or with swc
// TODO we need to decide which to use for what
function transpile(js) {
    return swc.transformSync(js, {
        module: {
            type: 'commonjs'
        },
        jsc: {
            parser: {
                syntax: 'ecmascript'
            },
            target: 'es2017', // TODO had to change this to get generator objects natively...not sure what else will break now
            experimental: {
                cacheRoot: '/dev/null'
            },
            loose: true
        },
        minify: false // TODO keeping this off for now, enable once the project is more stable
    }).code;
}
