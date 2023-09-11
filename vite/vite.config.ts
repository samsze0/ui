import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import pkg from "./package.json";

// Library mode
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    // react(),
    dts({
      insertTypesEntry: true,
      include: ["lib"],
    }),
    externalizeDeps({
      include: [],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    sourcemap: true,
    // Next13 Client + Server components with Rollup
    // https://dev.to/mryechkin/react-server-components-and-client-components-with-rollup-3c05
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      plugins: [preserveDirectives()],
      // https://rollupjs.org/configuration-options/#external
      // Need to be exact match i.e. "next/router" won't match "next"
      // external: Object.keys(pkg.peerDependencies ?? {}),
      onwarn(warning, warn) {
        // if (warning.code === "") return;

        warn(warning);
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@@/utils",
        replacement: resolve(__dirname, "lib/src/utils"),
      },
      {
        find: "@@/components/primitives",
        replacement: resolve(__dirname, "lib/src/components/primitives"),
      },
      {
        find: "types",
        replacement: resolve(__dirname, "lib/types"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "lib/src"),
      },
    ],
  },
});
