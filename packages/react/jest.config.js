module.exports = {
    name: 'react',
    displayName: 'react',
    verbose: true,
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.ts(x)?$': 'ts-jest',
    },
    testRegex: '.test\\.ts$',
    restoreMocks: true,
    clearMocks: true,
};
