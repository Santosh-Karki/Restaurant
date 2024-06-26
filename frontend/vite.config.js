import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/reservation': 'https://restaurant-lnv2.onrender.com/',
      '/user': 'https://restaurant-lnv2.onrender.com/'
    }
  }
})

