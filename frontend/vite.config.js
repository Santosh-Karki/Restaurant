import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // proxy: {
    //   '/reservation': 'https://restaurant-8p5p.onrender.com',
    //   '/user': 'https://restaurant-8p5p.onrender.com'
    // }
  }
})
