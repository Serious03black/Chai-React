import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Specify your PostCSS config file
  },
  server: {
    hmr: {
      overlay: false, // Optional: Disable the overlay for HMR errors
    },
  },
});
