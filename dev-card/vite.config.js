import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  root: 'dev-card',
  plugins: [react()],
  base: '/dev/',
  build: { outDir: '../dist/dev', emptyOutDir: false },
})
