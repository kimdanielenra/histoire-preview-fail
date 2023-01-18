/// <reference types="vitest" />
import { defineConfig, UserConfig, splitVendorChunkPlugin } from "vite";
import Vue from "@vitejs/plugin-vue";
import * as path from "path";

import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const resolve: UserConfig["resolve"] = {
    // allows imports from "src/" with "@/"
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  };

  const componentsPlugin = Components({
    dts: "src/components.d.ts",
    globs: "src/**/Test*.vue",
  });

  if (command === "serve") {
    return {
      resolve,
      optimizeDeps: {
        exclude: [],
      },
      server: {
        port: 3000,
      },
      plugins: [
        Vue({
          template: {
            compilerOptions: {
              isCustomElement: (tag) => new Set(["lottie-player"]).has(tag),
            },
          },
        }),

        componentsPlugin,
      ],
    };
  }

  return {
    resolve,
    plugins: [Vue(), componentsPlugin, splitVendorChunkPlugin()],
  };
});
