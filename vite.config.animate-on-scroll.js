import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      /* Vite switched to esm by default and generating `cjs` for build names.
      cjs doesn't work in browser because while parsing they are considering as node env.*/
      fileName: (format) => {
        return `animate-on-scroll.${format}.js`
      },
      name: 'scroll-reveal',
      entry: 'src/animate-on-scroll/index.tsx',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        globals: {}
      }
    }
  }
})
