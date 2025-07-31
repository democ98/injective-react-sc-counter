# Injective React Smart Contract Counter

这是一个基于 Injective 区块链的智能合约计数器应用，使用 React + TypeScript + Vite 构建。

## 功能特性

- 🔗 **钱包连接**: 支持连接 Injective 钱包
- 📊 **计数器显示**: 实时显示智能合约中的计数值
- ⚡ **智能合约交互**: 与 Injective 网络上的计数器智能合约进行交互
- 🎨 **现代 UI**: 使用 TailwindCSS 构建的响应式界面
- 📱 **状态管理**: 使用 Zustand 进行高效的状态管理

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: TailwindCSS
- **状态管理**: Zustand
- **区块链**: Injective SDK
- **钱包集成**: Injective Labs Shared Packages

## 本地开发

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

应用将在 http://localhost:5173 启动

### 构建生产版本

```bash
yarn build
```

## 部署

本项目配置了 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 每次推送到 `main` 分支时，会自动构建并部署

### 访问地址

部署后的应用地址：`https://[your-username].github.io/injective-react-sc-counter/`

## 项目结构

```
src/
├── components/          # React 组件
│   ├── App/           # 应用相关组件
│   ├── Counter.tsx    # 计数器组件
│   ├── InjectiveLogo.tsx
│   └── InjectiveWelcome.tsx
├── store/             # Zustand 状态管理
│   ├── counter.ts     # 计数器状态
│   └── wallet.ts      # 钱包状态
├── app/               # 应用配置和服务
└── main.tsx          # 应用入口
```

## 使用说明

1. **连接钱包**: 点击右上角的钱包连接按钮
2. **查看计数**: 页面中央显示当前计数值
3. **重新获取**: 点击 "Refetch Count" 按钮更新计数值
4. **增加计数**: 连接钱包后，点击 "Increment Count" 按钮增加计数

## 开发说明

- 项目使用 Injective Labs 的共享包进行区块链交互
- 智能合约地址配置在 `src/app/utils/constants.ts` 中
- 所有区块链交互都通过 Zustand store 进行管理

## 许可证

MIT License 