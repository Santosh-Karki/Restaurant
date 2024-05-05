import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/reservation': 'https://localhost:4000',
      '/user': 'http://localhost:4000'
    }
  }
})
