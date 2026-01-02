import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 核心修改：base 必须是 /仓库名/
  base: '/survey-attempt-collector/',
  build: {
    outDir: 'dist',
    sourcemap: false, // 生产环境关闭 sourcemap，减小体积
  },
  server: {
    historyApiFallback: true
  }
})