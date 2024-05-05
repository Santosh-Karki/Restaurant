import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/reservation': 'https://restaurant-zsuu.onrender.com',
      '/user': 'https://restaurant-zsuu.onrender.com`'
    }
  }
})
