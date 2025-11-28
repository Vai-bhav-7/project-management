import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,       // fixed port for frontend
    strictPort: true, // fail if 5174 is already in use
  },
})
