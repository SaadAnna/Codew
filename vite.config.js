import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    compression({ algorithm:'gzip' }), // or 'brotliCompress'
  ],
  build: {
    minify: 'terser', // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false, // Remove comments from output
      },
    },
  },
})

