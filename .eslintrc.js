module.exports = {
    "extends": [
        "airbnb",
        "prettier"
    ],
    "plugins": [
        "prettier",
        "jest"
    ],
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true
    },
    "env": {
        "jest/globals": true
    },

    /**
     * ESLint rules
     *
     * All available rules: http://eslint.org/docs/rules/
     *
     * Rules take the following form:
     *   "rule-name", [severity, { opts }]
     * Severity: 2 == error, 1 == warning, 0 == off.
     */
    "rules": {
        // syntax preferences
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": "error",
        "no-extra-semi": "error",
        "comma-style": ["error", "last"],
        "wrap-iife": ["error", "inside"],
        "spaced-comment": ["error", "always", { "markers": ["*"] }],
        "eqeqeq": ["error"],
        "arrow-body-style": ["error", "as-needed"],
        "accessor-pairs": ["error", { "getWithoutSet": false, "setWithoutGet": false }],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "curly": ["error", "multi-or-nest", "consistent"],
        "new-parens": "error",
        "func-call-spacing": "error",
        "arrow-parens": ["error", "as-needed"],
        "prefer-const": "error",
        "quote-props": ["error", "consistent"],

        // anti-patterns
        "no-var": "error",
        "no-with": "error",
        "no-multi-str": "error",
        "no-caller": "error",
        "no-implied-eval": "error",
        "no-labels": "error",
        "no-new-object": "error",
        "no-octal-escape": "error",
        "no-self-compare": "error",
        "no-shadow-restricted-names": "error",
        "no-cond-assign": "error",
        "no-debugger": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-unreachable": "error",
        "no-unsafe-negation": "error",
        "radix": "error",
        "valid-typeof": "error",
        "no-unused-vars": ["error", { "args": "none", "vars": "local", "varsIgnorePattern": "([fx]?describe|[fx]?it|beforeAll|beforeEach|afterAll|afterEach)" }],
        "no-implicit-globals": ["error"],

        // es2015 features
        "require-yield": "error",
        "template-curly-spacing": ["error", "never"],

        // spacing details
        "space-infix-ops": "error",
        "space-in-parens": ["error", "never"],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "no-whitespace-before-property": "error",
        "keyword-spacing": ["error", {
            "overrides": {
                "if": { "after": true },
                "else": { "after": true },
                "for": { "after": true },
                "while": { "after": true },
                "do": { "after": true },
                "switch": { "after": true },
                "return": { "after": true }
            }
        }],
        "arrow-spacing": ["error", { "after": true, "before": true }],

        // file whitespace
        "no-multiple-empty-lines": ["error", { "max": 2 }],
        "no-mixed-spaces-and-tabs": "error",
        "no-trailing-spaces": "error",
        "linebreak-style": [process.platform === "win32" ? "off" : "error", "unix"],
        "indent": ["error", 4, { "MemberExpression": 1, "SwitchCase": 1, "CallExpression": { "arguments": 2 } }],
        "key-spacing": ["error", {
            "beforeColon": false
        }],

        // jest
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",

        // sasha
        "no-console": "warn",
        "no-unused-vars": "warn",
        "semi": "error",
        "max-len": ["error", 80, 4],
        "require-jsdoc": [
            "error",
            {
                "require": {
                    "FunctionDeclaration": false,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false
                }
            }],
        "object-curly-spacing": ["error", "always"],
        "brace-style": ["error", "stroustrup"],
        "keyword-spacing": [
            "error",
            {
                "before": false,
                "after": true,
                "overrides": {
                    "catch": { "after": false }
                }
            }
        ],
        "array-bracket-spacing": ["error", "always", { "objectsInArrays": false }],
        "padded-blocks": "off",
        "curly": ["error", "multi-or-nest"],
    }
};