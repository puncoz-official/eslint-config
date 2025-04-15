"use strict"

import pluginAntfu         from "eslint-plugin-antfu"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import globals             from "globals"

/**
 * @param {{
 *
 * }} options
 *
 * @returns {import("eslint").Linter.Config[]}
 */
const javascriptConfig = (options = {}) => {
  return [
    {
      name: "puncoz/javascript/init",
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2025,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: "latest",
          sourceType: "module",
        },
        sourceType: "module",
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },

    {
      name: "puncoz/javascript/rules",
      plugins: {
        antfu: pluginAntfu,
        "unused-imports": pluginUnusedImports,
      },
      rules: {
        "accessor-pairs": [
          "error",
          {
            setWithoutGet: true,
            enforceForClassMembers: true,
          },
        ],
      },
    },
  ]
}

export default javascriptConfig
