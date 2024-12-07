import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['aws-amplify'],
    exclude: ['@aws-amplify/ui-react'], // Exclude UI components if not needed
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser', // Fix Amplify config resolution
    },
  },
});
