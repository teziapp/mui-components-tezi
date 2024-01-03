module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
  },
  globals: {
    MyGlobal: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin', 
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "sonarjs",
    "ban",
    "sort-class-members",
  ],
  rules: {
    "ban/ban": [
      "error",
      { name: ["describe", "only"], message: "REVERT BEFORE PUSHING" },
      { name: "fdescribe", message: "REVERT BEFORE PUSHING" },
      { name: ["it", "only"], message: "REVERT BEFORE PUSHING" },
      { name: "fit", message: "REVERT BEFORE PUSHING" },
      { name: ["test", "only"], message: "REVERT BEFORE PUSHING" },
      { name: "ftest", message: "REVERT BEFORE PUSHING" },
    ],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "sort-class-members/sort-class-members": [
      "error",
      {
        order: [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[methods]",
          "[conventional-private-methods]",
        ],
        accessorPairPositioning: "getThenSet",
      },
    ],
    "@typescript-eslint/typedef": [
      "error",
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Function: {
            message:
            "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, enums: false, typedefs: false },
    ],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/unified-signatures": "error",
    "no-duplicate-imports": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error", 
    "sonarjs/no-duplicate-string": ["error", {'threshold': 4}],
    "sonarjs/no-duplicated-branches": "error",
    "sonarjs/no-identical-conditions": "error",
    "sonarjs/no-identical-functions": "error",
    "sonarjs/no-extra-arguments": "error",
    "import/no-default-export": "error",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowedPromiseNames: [
          "PromisedAssertion",
          "Bluebird",
          "BluebirdPromise",
          "BlueBirdPromise",
          "PromiseLike",
          "RequestPromise",
          "Thenable",
        ],
        checkArrowFunctions: false,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "id-blacklist": [
      2,
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": ["error"],
    "max-statements": ["error", 30, { ignoreTopLevelFunctions: true }],
    "max-params": ["error", 4],
    complexity: ["error", { max: 7 }],
    "sonarjs/cognitive-complexity": ["error", 10],
    "max-lines-per-function": [
      "error",
      { max: 60, skipBlankLines: true, skipComments: true },
    ],
    "max-lines": [
      "error",
      { max: 350, skipBlankLines: true, skipComments: true },
    ],
    "max-len": [
      "error", 
      { code: 150, ignoreComments: true, ignoreUrls: true }
    ],
    "max-depth": ["error", 5],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-unused-expressions": "off",
    "no-useless-catch": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "no-param-reassign": "error",
    "no-eval": "error",
    "max-classes-per-file": ["error", 1],
    "dot-notation": "error",    
    "no-debugger": "error",
    "no-constant-condition": "error",
    "no-console": "error",
    "no-cond-assign": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "no-var": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "id-length": ["error", { min: 2, max: 30, properties: "never" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "function",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        modifiers: ["global"],
        types: ["function"],
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        modifiers: ["global"],
        format: ["UPPER_CASE"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "objectLiteralProperty",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "classProperty",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "parameter",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "classMethod",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "objectLiteralMethod",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "class",
        format: ["StrictPascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "interface",
        format: ["StrictPascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
        filter: {
          regex: "^I.*$",
          match: false,
        },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',        
    // we want to force semicolons
    'semi': ['error', 'always'],    
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          {
            "group": ["./", "../"],
            "message": "Relative imports are not allowed."
          }
        ]
      }
    ]    
  },
};
  