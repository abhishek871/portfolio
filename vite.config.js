import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy /api to the local Groq function during dev (see api/README).
    // In production on Vercel, /api is served by the serverless function directly.
  },
})
