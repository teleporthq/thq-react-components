import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'dist',
    lib: {
      name: 'react-components',
      entry: 'src/index.tsx',
      formats: ['es', 'cjs', 'umd'],
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
