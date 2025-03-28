import { defineConfig } from 'vite';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import htmlInject from 'vite-plugin-html-inject';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  root: './src',
  publicDir: path.resolve(__dirname, 'public'),

  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'assets',
    target: 'esnext',
    minify: 'esbuild',
  },

  server: {
    open: true,
    port: 3000,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    htmlInject(),
    createHtmlPlugin({
      minify: true,
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced:
          false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
});