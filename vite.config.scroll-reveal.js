import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'dist',
    minify: false,
    lib: {
      fileName: 'scroll-reveal',
      name: 'scroll-reveal',
      entry: 'src/scroll-reveal/index.tsx',
      formats: ['umd'],
    }
  }
})
