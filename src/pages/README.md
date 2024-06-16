## pages

說明: 本目錄為各頁面內容，基於目錄自動產生路由。
限制: 因定義 `*.vue` 採用 Pascal Case，故目錄必須同 Pascal Case，產生的 route 才會一致。

更多細節，請參閱 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)

**注意: 當目錄產生刪減時，需重啟 `yarn dev`，暫時為套件限制**

### 路徑簡寫

`@/` 對應 `./src` 目錄

舉例來說，可將下列相對路徑取代。VS Code 正確讀取 modules 下，輸入 `@` 時會自能感知(intelliSense)。

```ts
import { moduleName } from '../../modules';

// to
import { moduleName } from '@/modules';
```

### 單元測試

說明：與 \*.vue 下新增 `__tests__` 目錄，測試名稱為 [FileName].spec.ts
