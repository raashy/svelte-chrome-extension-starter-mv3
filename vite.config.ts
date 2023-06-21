import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false,
    compilerOptions: {
      format: 'esm',
    }  
  }),
],
  build: { 
    minify: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {      
      input: ["content.html", "newtab.html", "popup.html", "background.html"],
      output: {
        entryFileNames: '[name].js', 
        dir: 'build',
        assetFileNames: '[name].[ext]',
      }
    }
  }
})
