import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,

    rollupOptions: {
      external: ['react'],
      input: {
        DateTimePrimitive: resolve(__dirname, 'src/date-time/index.tsx'),
        DangerousHTML: resolve(__dirname, 'src/dangerous-html/index.tsx'),
      },
      output: [
        {
          inlineDynamicImports: false,
          dir: 'dist',
          format: 'es',
          entryFileNames: '[name].[format].js',
          globals: {
            react: 'React',
          },
        },
        {
          inlineDynamicImports: false,
          dir: 'dist',
          format: 'cjs',
          entryFileNames: '[name].[format].js',
          globals: {
            react: 'React',
          },
        },
      ],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
