"use strict"

import gitIgnore from "eslint-config-flat-gitignore"

const excluded = [
  "**/node_modules",
  "**/dist",
  "**/build",
  "**/packages/**/dist",
  "**/packages/**/build",
  "**/packages/**/node_modules",
  "**/packages/**/node_modules/**",

  "**/output",
  "**/.output",
  "**/coverage",

  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",

  "**/.nuxt",
  "**/.next",
  "**/.svelte-kit",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.vite-inspect",
  "**/.yarn",
  "**/.vite.config.*.timestamp-*",

  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts",

  "**/database/migrations/**",
]

/**
 * @param {{
 *   disableGitIgnore?: boolean
 *   ignoredFiles?: string[]
 *   disableDefaultIgnores?: boolean
 * }} options
 *
 * @returns {import("eslint").Linter.Config[]}
 */
const ignoreConfig = (options = {}) => {
  const {
    disableGitIgnore = false,
    ignoredFiles = [],
    disableDefaultIgnores = false,
  } = options

  const configs = []

  if (!disableGitIgnore) {
    configs.push(gitIgnore({
      files: [".gitignore"],
      strict: true,
      root: true,
    }))
  }

  configs.push({
    name: "puncoz/ignores",
    ignores: [
      ...(disableDefaultIgnores ? [] : excluded),
      ...ignoredFiles,
    ],
  })

  return configs
}

export default ignoreConfig
