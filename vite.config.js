import { defineConfig } from 'vite';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    assetsDir: 'assets',
  },
  plugins: [
    htmlInject(),
  ],
});