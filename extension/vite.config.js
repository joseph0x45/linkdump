import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages-svelte";
import Unocss from "unocss/vite";
import transformerDirectives from "@unocss/transformer-directives";

let plugins = [
  svelte(),
  pages(),
  Unocss({ transformers: [transformerDirectives()] }),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "android") {
    return {
      plugins: [legacy(), ...plugins],
    };
  } else {
    return {
      plugins: [...plugins],
    };
  }
});
