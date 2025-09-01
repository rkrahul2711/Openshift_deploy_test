import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",          // DOM environment for React
    setupFiles: "./src/setupTests.js",
    globals: true,                 // use test/expect without imports
    css: true                      // avoid CSS import errors in tests
  },
})




