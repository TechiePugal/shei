import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],  // Excluding lucide-react from dependency optimization
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split large libraries into separate chunks to reduce initial load size
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            return 'vendor'; // Default chunk for other node_modules dependencies
          }
        },
      },
    },
  },
});
