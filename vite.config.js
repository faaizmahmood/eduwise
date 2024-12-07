import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['aws-amplify'],
    exclude: ['@aws-amplify/ui-react'], // Exclude UI components if not needed
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser', // Fix Amplify config resolution
      // Alias Node.js modules to browser-friendly versions
      crypto: path.resolve('./node_modules/crypto-browserify'),
      stream: path.resolve('./node_modules/stream-browserify'),
      buffer: path.resolve('./node_modules/buffer'),
      process: path.resolve('./node_modules/process/browser'),
    },
  },
  define: {
    // Polyfill for `require`
    'global': 'globalThis',
    'process.env': {},
  },
});
