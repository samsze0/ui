import alias from "@rollup/plugin-alias";
import preserveDirectives from "rollup-plugin-preserve-directives";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";

// const packageJson = require("./package.json");

export default {
  input: "lib/main.ts",
  output: [
    {
      // file: packageJson.module,
      // file: "./dist/ui.mjs",
      dir: "./dist/esm",
      format: "esm",
      preserveModules: true,
    },
    // {
    //   // file: packageJson.main,
    //   // file: "./dist/ui.cjs",
    //   dir: "./dist/cjs",
    //   format: "cjs",
    //   preserveModules: true,
    // },
  ],
  onwarn(warning, warn) {
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" &&
      warning.message.includes(`use client`)
    ) {
      return;
    }
    if (warning.code === "THIS_IS_UNDEFINED") return;
    warn(warning);
  },
  plugins: [
    // Preserve e.g. "use client"
    preserveDirectives(),
    alias({
      entries: [{ find: "@@/*", replacement: "./lib/src/*" }],
    }),
    postcss({
      // Minify CSS
      minimize: true,
      modules: true,
      // Extract CSS to the same location where JS file is generated but with .css extension
      extract: true,
      // Load config file
      config: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist/esm/types",
    }),
    // Minify
    // terser(),
    // Don't bundle package.json peerDependencies
    external(),
    // Convert CommonJS modules to ES6
    commonjs({}),
    // Resolve node_modules/
    resolve({}),
  ],
};
