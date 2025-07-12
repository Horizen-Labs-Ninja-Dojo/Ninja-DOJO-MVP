import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tagger from 'lovable-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tagger()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
