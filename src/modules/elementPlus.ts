import { type App } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

export const install = (app: App) => {
  app.use(ElementPlus, { zIndex: 2000, locale: zhCn });
};
