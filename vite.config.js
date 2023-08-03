import { defineConfig } from 'vite'
import pluginReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [pluginReact({ jsxRuntime: 'classic' })],
  build: {
    emptyOutDir: true,
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: 'dist',
    lib: {
      fileName: 'react-components',
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', "dayjs"]
    },
  }
})
