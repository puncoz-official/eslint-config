"use strict"

import eslintConfig from "./src/index.mjs"

export default eslintConfig({
  ignores: {
    ignoredFiles: [
      "**/node_modules/**",
    ],
  },
})
