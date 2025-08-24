import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: 'index.html',
      hello: 'hello.html',
      counter: 'counter.html'
    }
  }
})
