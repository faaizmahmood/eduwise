import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_BRANCH === 'qa' ? '/Smart-E-Learning-Platform/qa/' : '/Smart-E-Learning-Platform/',
})
