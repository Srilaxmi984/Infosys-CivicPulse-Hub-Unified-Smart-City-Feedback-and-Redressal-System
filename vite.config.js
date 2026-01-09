import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/Infosys-CivicPulse-Hub-Unified-Smart-City-Feedback-and-Redressal-System/",
  plugins: [react(), tailwindcss()],
   define: {
    global: 'window',
  },
})



