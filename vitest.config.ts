import { configDefaults, coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const excludePath = ['config.ts', 'proxy.ts', 'src/core/**/domain/**'];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      css: false,
      clearMocks: true,
      restoreMocks: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      exclude: [...configDefaults.exclude, ...excludePath],
      coverage: {
        provider: 'v8',
        exclude: [...coverageConfigDefaults.exclude, ...excludePath],
      },
      deps: {
        optimizer: {
          web: {
            enabled: true,
          },
        },
      },
      server: {
        deps: {
          inline: ['element-plus', '@vue'],
        },
      },
    },
  }),
);
