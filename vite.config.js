import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Build optimizations
  build: {
    // Generate source maps for production debugging
    sourcemap: false,

    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', 'framer-motion'],
        },
      },
    },

    // Optimize CSS
    cssCodeSplit: true,

    // Set chunk size warnings
    chunkSizeWarningLimit: 1000,
  },

  // Server configuration
  server: {
    // Enable HTTPS in development if needed
    https: false,

    // Configure host for network access
    host: true,
    port: 5173,
  },

  // Preview configuration (for npm run preview)
  preview: {
    port: 4173,
    host: true,
  },

  // Environment variables
  envPrefix: 'VITE_',

  // Base public path (important for deployment)
  // For GitHub Pages, use the repository name as base path
  // Example: base: '/repository-name/'
  // For custom domain, use: base: './'

  // REPLACE 'your-repository-name' with your actual GitHub repository name
  // Example: if your repo is 'my-portfolio', use: base: '/my-portfolio/'
  base: process.env.NODE_ENV === 'production'
    ? (process.env.GITHUB_REPOSITORY
        ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
        : '/alenton-perfect-touch/')  // ← CHANGE THIS to your repo name
    : '/',
})
