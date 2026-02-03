import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import filenames from "eslint-plugin-filenames-simple";

const eslintConfig = defineConfig([
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
    // only lint src/ 
    {
        ignores: ["**/*", "!src/**", "!index.ts"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: "readonly",
                JSX: "readonly",
                document: "readonly",
                window: "readonly",
                console: "readonly",
                module: "readonly",
                process: "readonly",
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // Warn on == instead of ===
            eqeqeq: ["warn", "always"],

            // React rules
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "react/jsx-pascal-case": ["error", { allowAllCaps: false }],

            // React Hooks rules
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "no-restricted-syntax": [
                "error",
                {
                    selector: "TSEnumDeclaration",
                    message: "Use string union instead of enum"
                },
            ],

            // Naming conventions
            "@typescript-eslint/naming-convention": [
                "error",
                // Proven to be more troublesome like importing App or Link from NextJs
                /*{
                    selector: "default",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                },*/
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE", "PascalCase"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "function",
                    format: ["camelCase", "PascalCase"],
                },
                {
                    selector: "interface",
                    format: ["PascalCase"],
                },
                {
                    selector: "typeAlias",
                    format: ["PascalCase"],
                },
                // it's kind of useless rn, cuz of no enum rule, but I 
                // will leave it here just in case
                /* {
                    selector: "enum",
                    format: ["PascalCase"],
                },
                {
                    selector: "enumMember",
                    format: ["UPPER_CASE", "PascalCase"],
                }, */
                {
                    selector: "class",
                    format: ["PascalCase"],
                },
                {
                    selector: "parameter",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                },
            ],
        },
    },
    {
        /// for NextJs naming convention and general react
        files: ["src/**/Components/**/*.{jsx,tsx}", "src/**/_Components/**/*.{jsx,tsx}"],
        plugins: {
            "filenames-simple": filenames,
        },
        rules: {
            "filenames-simple/naming-convention": ["error", { rule: "PascalCase" }],
        },
    },
    {
        files: ["src/**/*.js"],
        extends: [tseslint.configs.disableTypeChecked],
    },
]);

export default eslintConfig;
