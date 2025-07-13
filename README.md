# My Component Library

一个现代化的 React 组件库，基于 TypeScript、Tailwind CSS 和 Astro 构建。

##  特性

- **TypeScript 支持**：完整的类型定义和类型安全
- **Tailwind CSS**：原子化 CSS 框架，快速样式开发
- **tailwind-variants**：类型安全的样式变体管理
- **Monorepo 架构**：多包管理，代码复用和独立版本控制
- **Turbo**：高性能构建系统，增量构建和智能缓存
- **Astro 文档站点**：现代化的组件文档和演示

## 📦 包结构

```
my-project/
├── packages/
│   ├── theme/          # 设计令牌和主题系统
│   └── ui-core/        # 核心 UI 组件
├── website/            # Astro 文档站点
└── ...
```

## 🛠️ 技术栈

- **构建工具**：tsup、Turbo
- **样式方案**：Tailwind CSS、tailwind-variants
- **文档框架**：Astro
- **包管理**：pnpm
- **代码质量**：Biome
- **类型检查**：TypeScript

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有包的开发模式
pnpm dev

# 只启动文档站点
pnpm --filter website dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @my-component-library/ui-core build
```

### 代码检查

```bash
pnpm lint
```

## 📚 组件文档

访问 [组件文档](http://localhost:4321) 查看完整的组件 API 和示例。

### 可用组件

- **Button**：按钮组件，支持多种变体和状态
- **Drawer**：抽屉组件，支持多方向展开

## 🏗️ 项目架构

### Monorepo 管理

使用 Turbo 进行多包管理：

- **增量构建**：只构建变更的包
- **并行执行**：同时构建多个包
- **智能缓存**：缓存构建结果，提升效率
- **依赖图优化**：按正确顺序构建

### 样式工程

- **Tailwind CSS**：原子化样式框架
- **tailwind-variants**：组件样式变体管理
- **主题系统**：统一的设计令牌管理

### 构建优化

- **tsup**：快速 TypeScript 构建
- **多格式输出**：ESM + CommonJS + 类型声明
- **Tree-shaking**：自动移除未使用代码

##  开发指南

### 添加新组件

1. 在 `packages/ui-core/src/` 创建组件目录
2. 实现组件逻辑和样式变体
3. 在 `packages/ui-core/src/index.ts` 导出
4. 在 `website/src/components/` 添加演示组件
5. 在 `website/src/pages/docs/components/` 添加文档

### 样式开发

使用 tailwind-variants 定义组件样式：

```typescript
import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'px-4 py-2 rounded',
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
    },
  },
});
```

### 类型定义

为组件定义完整的 TypeScript 类型：

```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

##  发布

### 发布特定包

```bash
pnpm --filter @my-component-library/ui-core publish
```

### 版本管理

```bash
# 更新版本
pnpm version patch
pnpm version minor
pnpm version major
```

##  贡献

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

##  许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-variants](https://www.tailwind-variants.com/)
- [Turbo](https://turbo.build/)
- [Astro](https://astro.build/)
- [tsup](https://tsup.egoist.dev/)
```

这个 README.md 包含了：

1. **项目介绍**：清晰描述项目特性和技术栈
2. **快速开始**：安装、开发、构建的完整指南
3. **架构说明**：Monorepo、样式工程、构建优化的详细解释
4. **开发指南**：添加组件、样式开发、类型定义的具体步骤
5. **发布流程**：版本管理和包发布的说明
6. **贡献指南**：标准的开源项目贡献流程

文档结构清晰，信息完整，适合开源项目使用。
