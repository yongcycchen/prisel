import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        input: 'index.ts',
        output: {
            name: 'priselCommon',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [
            typescript(), // so Rollup can convert TypeScript to JavaScript
        ],
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'index.ts',
        plugins: [
            typescript(), // so Rollup can convert TypeScript to JavaScript
        ],
        output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    },
];
