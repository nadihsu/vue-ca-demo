/* eslint-disable */
import { type App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';

export const router = createRouter({
  extendRoutes: (routes) => {
    return routes;
  },
  history: createWebHistory(import.meta.env.BASE_URL),
});

export const install = (app: App) => {
  app.use(router);
};
