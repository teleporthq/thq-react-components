import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'dist',
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: /^react/,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
