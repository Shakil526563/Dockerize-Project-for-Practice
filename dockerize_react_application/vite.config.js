import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,               // 👈 allow Docker to expose it on localhost
    port: 5173,               // 👈 default port (must match Dockerfile/EXPOSE)
    strictPort: true,         // 👈 force it to use that port
    watch: {
      usePolling: true,       // 👈 enables file change detection in Docker
    },
  },
})
