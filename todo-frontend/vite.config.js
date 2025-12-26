import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// Vite configuration: enables React plugin and the official Tailwind Vite plugin
export default defineConfig({
  plugins: [react(), tailwind()],
})
