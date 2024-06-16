# 說明
本 repo 主要嘗試使用 Clean Architecture (CA) 建立開發架構與簡易 demo。

## Develop Environment Requirements

- Node: v18.18.0 and above
- yarn: v1.22.19 and above

## Project Setup

```bash
yarn install
```

### Compile and HMR for Development

```bash
yarn dev
```

## Folder Structure

```text
src/
├── assets: 靜態資源與樣式
│   └── css
├── core: 各單元核心邏輯
│   ├── domain: 核心 entity
│   ├── stores: 狀態管理
│   └── usecases: 商業邏輯
├── modules: 依賴模組
└── pages: file-based routing 的頁面內容
```
