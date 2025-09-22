import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    // Add this if you're deploying to a subpath
    // base: '/your-repo-name/'
  },
  plugins: [react()],
})
