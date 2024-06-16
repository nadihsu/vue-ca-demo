## modules

說明: 本目錄為模組系統，來源包含封裝第三方依賴或自定義模組，請依下列 template 操作，該模組將會自動引入。若無則為按需載入(on-demand)。

```ts
// installed automatically
import { type App } from 'vue';

export const install = (app: App) => {
  // do something
};
```

```ts
// on-demand
// use named export instead of default export
export const moduleName = () => {};
// or
const moduleName = () => {};
export { moduleName };
```
