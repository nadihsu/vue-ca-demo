## core

說明: 本目錄為使用 CA (clean architecture) 方式管理專案的各單元。以各單元的名稱作為目錄，目錄內包含三個主要目錄:

```text
[feature folder]/
├── domain 項目的核心
│   ├── [feature].entity.ts 定義項目的型別與邏輯
│   └── [feature].port.ts 定義項目的 interface
├── stores 項目的狀態管理
│   └── [feature].store.ts 提供給介面的狀態與方法
├── usecases: 項目的應用情境
│   └── [feature].usecase.ts 定義項目的邏輯
├── [feature].api.ts 定義項目的 API 表資源
└── [feature].utils.ts 定義項目的共用函式資源
```

### stores

說明: 本目錄存放各頁面的狀態管理資訊。為使 pinia 滿足 HMR(Hot Module Replacement)，請依下列 template 操作，則可關聯 HMR。

更多資訊，請參閱 [Pinia-HMR](https://pinia.vuejs.org/cookbook/hot-module-replacement.html#HMR-Hot-Module-Replacement-)

```ts
// auth.ts
const useAuthStore = defineStore('auth', {
  // options...
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
```
