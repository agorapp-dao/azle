# Azle (patched for AgorApp)

This is a patched version of the [Azle](https://github.com/demergent-labs/azle) project. Aim of these patches it to make it work with AgorApp.

Changes against original:

-   Compiler can be invoked from the code
-   Removes sync Node.js operations to make it work better in a server-side environment
-   Library is compiled to a CommonJS
-   type_tests are removed to make compilation easier

## Build

```bash
npm run build
```

## Publish

```bash
# create orphan branch for deployment
```
