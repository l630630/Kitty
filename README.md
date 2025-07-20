# Kitty UI

一个现代化的 React 组件库，基于 TypeScript、Tailwind CSS 和 Astro 构建。

## ✨ 特性

- **🚀 函数驱动**：基于 React Hooks 设计的函数式 API，提供灵活的逻辑复用能力
- **🛠️ 类型友好**：完整的 TypeScript 类型定义，享受一流的开发体验
- **📦 轻量高效**：基于 Tailwind CSS，支持按需引入，保持轻量快速
- **📱 响应式设计**：支持各种屏幕尺寸的响应式布局，完美适配移动端和桌面端
- **🌙 暗黑主题**：内置完整的暗黑主题支持，提供流畅的主题切换体验
- **☃️ 开源友好**：完全开源，提供完整的中文文档和社区支持
- **Monorepo 架构**：多包管理，代码复用和独立版本控制
- **Turbo**：高性能构建系统，增量构建和智能缓存
- **Astro 文档站点**：现代化的组件文档和演示

## 📦 包结构

```
Kitty/
├── packages/
│   ├── theme/          # 设计令牌和主题系统
│   └── ui-core/        # 核心 UI 组件 (kitty-react)
├── website/            # Astro 文档站点
└── ...
```

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install kitty-react

# 使用 yarn
yarn add kitty-react

# 使用 pnpm
pnpm add kitty-react
```

### 基础用法

```jsx
import { Button, Checkbox, Drawer } from 'kitty-react';

function App() {
  return (
    <div>
      <Button variant="primary">开始使用</Button>
      <Checkbox label="同意条款" />
    </div>
  );
}
```

## 🛠️ 技术栈

- **构建工具**：tsup、Turbo
- **样式方案**：Tailwind CSS、tailwind-variants
- **文档框架**：Astro
- **包管理**：pnpm
- **代码质量**：Biome
- **类型检查**：TypeScript

## � 开发

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
pnpm --filter kitty-react build
```

### 代码检查

```bash
pnpm lint
```

## 📚 组件文档

访问 [组件文档](http://localhost:3002) 查看完整的组件 API 和示例。

### 🧩 可用组件

- **Button**：按钮组件，支持多种变体、尺寸和颜色
- **Checkbox**：多选框组件，支持不确定状态和错误提示
- **Drawer**：抽屉组件，支持四个方向和多种尺寸

### 🎨 组件特性

- **多种变体**：每个组件都提供多种样式变体
- **响应式设计**：所有组件都支持响应式布局
- **暗黑主题**：完整的暗黑主题支持
- **无障碍访问**：遵循 ARIA 标准，支持键盘导航
- **TypeScript**：完整的类型定义

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

## 🌟 在线演示

访问我们的在线文档站点查看所有组件的实时演示：

- **首页**：[http://localhost:3002](http://localhost:3002)
- **组件文档**：[http://localhost:3002/docs](http://localhost:3002/docs)
- **Button 组件**：[http://localhost:3002/docs/components/button](http://localhost:3002/docs/components/button)
- **Checkbox 组件**：[http://localhost:3002/docs/components/checkbox](http://localhost:3002/docs/components/checkbox)
- **Drawer 组件**：[http://localhost:3002/docs/components/drawer](http://localhost:3002/docs/components/drawer)

## 🔨 开发指南

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

## 📦 发布

### 发布特定包

```bash
pnpm --filter kitty-react publish
```

### 版本管理

```bash
# 使用 changesets 管理版本
pnpm changeset
pnpm version-packages
pnpm release
```

## 🎯 路线图

- [ ] 添加更多基础组件（Input、Select、Modal 等）
- [ ] 支持更多主题定制选项
- [ ] 添加动画和过渡效果
- [ ] 提供 Figma 设计资源
- [ ] 支持 React Native
- [ ] 添加单元测试覆盖
- [ ] 国际化支持

## 🤝 贡献

我们欢迎所有形式的贡献！

### 贡献方式

1. **报告 Bug**：在 [Issues](https://github.com/l630630/Kitty/issues) 中报告问题
2. **功能建议**：提出新功能或改进建议
3. **代码贡献**：提交 Pull Request

### 开发流程

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 代码规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 和 Prettier 配置
- 为新组件添加完整的类型定义
- 编写清晰的文档和示例

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [tailwind-variants](https://www.tailwind-variants.com/) - 类型安全的样式变体
- [Turbo](https://turbo.build/) - 高性能构建系统
- [Astro](https://astro.build/) - 现代化静态站点生成器
- [tsup](https://tsup.egoist.dev/) - TypeScript 构建工具
- [React](https://react.dev/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和设计师！

特别感谢以下开源项目的启发：
- [Ant Design](https://ant.design/)
- [Chakra UI](https://chakra-ui.com/)
- [Mantine](https://mantine.dev/)
- [Radix UI](https://www.radix-ui.com/)

---

<div align="center">
  <p>如果这个项目对你有帮助，请给我们一个 ⭐️</p>
  <p>Made with ❤️ by <a href="https://github.com/l630630">l630630</a></p>
</div>
