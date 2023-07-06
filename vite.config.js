import { defineConfig } from 'vite'
import pluginReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [pluginReact({ jsxRuntime: 'classic' })],
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
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  }
})
