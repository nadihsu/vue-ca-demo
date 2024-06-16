import path from 'node:path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import AutoImport from 'unplugin-auto-import/vite';
import EslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import server from './config';

const productionMode = process.env.NODE_ENV === 'production';
const testMode = process.env.NODE_ENV === 'test';

// https://vitejs.dev/config/
export default defineConfig({
  server,
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: !productionMode, // production 下保留原始
    chunkSizeWarningLimit: 875, // default * 1.75
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]';
          }

          return 'css/[name]-[hash][extname]';
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        manualChunks: {
          'vue-deps': ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
          ui: ['element-plus'],
        },
      },
    },
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      routesFolder: 'src/pages',
      exclude: ['**/components/**'],
      extensions: ['.vue'],
    }),
    Vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith('rd-'),
        },
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia',
        'vitest',
        { 'element-plus/es': ['ElLoading', 'ElMessage', 'ElMessageBox', 'ElNotification'] },
      ],
      dts: './auto-imports.d.ts',
      dirs: ['src/core/**/stores'],
      vueTemplate: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: false,
        }),
      ],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: './components.d.ts',
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver({
          importStyle: false,
        }),
      ],
    }),

    // https://github.com/gxmari007/vite-plugin-eslint
    !testMode && EslintPlugin(),

    // https://github.com/ModyQyW/vite-plugin-stylelint
    StylelintPlugin({
      cache: false,
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`,
      '~': `${path.resolve(__dirname, './src/assets')}`,
    },
    extensions: ['.js', '.ts', '.json', '.vue', '.mjs', '.mts'],
  },
});
