module.exports = {
    /*
    testMatch [array]
    Default:
    [ "**\/__tests__/**\/*.[jt]s?(x)", "**\/?(*.)+(spec|test).[jt]s?(x)" ])

    The glob patterns Jest uses to detect test files. By default it looks for
    .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any
    files with a suffix of .test or .spec (e.g. Component.test.js or
    Component.spec.js). It will also find files called test.js or spec.js.
    */
    testMatch: [
        '**/src/**/*.test.js',
    ],

    /*
    testPathIgnorePatterns [array]
    Default: ["/node_modules/"]

    An array of regexp pattern strings that are matched against all test paths
    before executing the test. If the test path matches any of the patterns,
    it will be skipped.
    These pattern strings match against the full path. Use the <rootDir>
    string token to include the path to your project's root directory to
    prevent it from accidentally ignoring all of your files in different
    environments that may have different root directories.
    Example: ["<rootDir>/build/", "<rootDir>/node_modules/"].
    */
    testPathIgnorePatterns: [
        '/node_modules/',
    ],

    /*
    globalSetup [string]
    Default: undefined

    This option allows the use of a custom global setup module which exports an
    async function that is triggered once before all test suites. This function
    gets Jest's globalConfig object as a parameter.
    */
    globalSetup: null,

    /*
    globalTeardown [string]
    Default: undefined

    This option allows the use of a custom global teardown module which exports
    an async function that is triggered once after all test suites.
    This function gets Jest's globalConfig object as a parameter.
    */
    globalTeardown: null,


    /*
    verbose [boolean]
    Default: false

    Indicates whether each individual test should be reported during the run.
    All errors will also still be shown on the bottom after execution.
    */
    verbose: true,


    /*
    bail [boolean]
    Default: false

    By default, Jest runs all tests and produces all errors into the console
    upon completion. The bail config option can be used here to have Jest
    stop running tests after the first failure.
    */
    bail: false,

    /*
    collectCoverage [boolean]
    Default: false

    Indicates whether the coverage information should be collected while
    executing the test. Because this retrofits all executed files with coverage
    collection statements, it may significantly slow down your tests.
    */
    collectCoverage: false,

    /*
    coverageDirectory [string]
    Default: undefined

    The directory where Jest should output its coverage files.
    */
    coverageDirectory: './coverage',


    /*
    collectCoverageFrom [array]
    Default: undefined

    An array of glob patterns indicating a set of files for which coverage
    information should be collected. If a file matches the specified glob
    pattern, coverage information will be collected for it even if no tests
    exist for this file and it's never required in the test suite.
    */
    collectCoverageFrom: [
        'src/**.js',
    ],

    /*
    coverageReporters [array]
    Default: ['json', 'lcov', 'text'],

    A list of reporter names that Jest uses when writing coverage reports.
    Any istanbul reporter can be used.
    Note: Setting this option overwrites the default values.
    Add 'text' or 'text-summary' to see a coverage summary in the console
    output.
    */
    coverageReporters: [ 'json', 'lcov', 'text', 'html' ],
};