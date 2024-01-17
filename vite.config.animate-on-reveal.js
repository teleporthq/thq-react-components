import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      /* Vite switched to esm by default and generating `cjs` for build names.
      cjs doesn't work in browser because while parsing they are considering as node env.*/
      fileName: (format) => {
        return `animate-on-reveal.${format}.js`;
      },
      name: "scroll-reveal",
      entry: "src/animate-on-reveal/index.tsx",
      formats: ["umd", "es"],
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
});
