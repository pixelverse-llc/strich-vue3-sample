import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Allow all hosts To support using tools like ngrok during development
    // Caveats apply: https://vite.dev/config/server-options.html#server-allowedhosts
    // Remove if not needed, or replace with domain, e.g. ['tunnel.mycorp.com']
    allowedHosts: true
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
