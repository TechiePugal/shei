import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'esbuild', // use 'terser' if you want smaller but slower builds
    target: 'es2015',   // modern JS target for broad browser compatibility
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,   // set to true only if you need source maps
    rollupOptions: {
      output: {
        manualChunks: undefined, // combine chunks if you prefer fewer files
      },
    },
  },
});
