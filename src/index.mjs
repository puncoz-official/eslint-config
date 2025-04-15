"use strict"

import process          from "node:process"
import ignoreConfig     from "./configs/ignores.mjs"
import javascriptConfig from "./configs/javascript.mjs"

/**
 * @param {?{
 *   ignores?: {
 *     disableGitIgnore?: boolean
 *     ignoredFiles?: string[]
 *     disableDefaultIgnores?: boolean
 *   }
 * }} options
 *
 * @returns {import("eslint").Linter.Config[]}
 */
const eslintConfig = (options = {}) => {
  const {
    ignores = {},
  } = options

  return [
    {
      files: ["**/*.?([cm])[jt]s?(x)"],
      rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
      },
    },

    ...ignoreConfig(ignores),
    ...javascriptConfig(),
  ]
}

export default eslintConfig
