import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import'
import proxyOptions from './config/proxy'
const isUppercase = (str: string) => str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: () => false

          // ...
        }
      }
    }),
    vueJsx({
      isCustomElement: () => false
    }),

    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    proxy: proxyOptions.dev
  }
})
