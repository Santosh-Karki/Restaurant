import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/reservation': ['http://localhost:4000', 'https://restaurant-o7bo.onrender.com'],
      '/user': ['http://localhost:4000', 'https://restaurant-o7bo.onrender.com']
    }
  }
})
