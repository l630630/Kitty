import { Button, Checkbox, Drawer } from "kitty-react";
import { useState } from "react";
import { getPath } from "../utils/path";

export default function IndexLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    advanced: true,
    disabled: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-theme duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* 版本标识 */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-8 hover:scale-105 transition-transform duration-300">
              🎉 v0.1.0 现已发布
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-gray-100 dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Kitty UI
            </h1>

            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed">
              为 React 打造的{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                现代化
              </span>{" "}
              组件库
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              开源、类型安全的组件库，基于 Tailwind CSS
              构建，为您的应用提供精美的 UI 组件
            </p>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href={getPath("/docs")} className="group">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  开始使用
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </a>

              <a
                href="https://github.com/l630630/Kitty"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </a>
            </div>

            {/* 快速安装 */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                快速安装
              </p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <code className="text-green-400 font-mono text-sm md:text-base bg-slate-800">
                    pnpm add kitty-react
                  </code>
                  <button className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 组件展示区域 */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              精心设计的组件库
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              直观易用的组件，为您的 React 应用增添现代感与实用性
            </p>
          </div>

          {/* 组件网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Button 组件卡片 */}
            <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
              {/* 字母标识 */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">B</span>
              </div>

              {/* 组件标题 */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Button
              </h3>

              {/* 组件描述 */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                多种样式和尺寸的按钮组件，支持自定义变体和状态
              </p>
              {/* 组件演示 */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-6">
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                  <Button variant="outline" size="sm">
                    Outline
                  </Button>
                </div>
              </div>

              {/* 查看更多链接 */}
              <a
                href={getPath("/docs/components/button")}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group transition-colors duration-200"
              >
                查看文档
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Checkbox 组件卡片 */}
            <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 hover:shadow-xl dark:hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
              {/* 字母标识 */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">C</span>
              </div>

              {/* 组件标题 */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Checkbox
              </h3>

              {/* 组件描述 */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                支持多种状态的多选框组件，包括选中、未选中和不确定状态
              </p>
              {/* 组件演示 */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <Checkbox
                    checked={checkboxStates.basic}
                    onChange={(e) =>
                      setCheckboxStates((prev) => ({
                        ...prev,
                        basic: e.target.checked,
                      }))
                    }
                    label="基础选项"
                    size="sm"
                    color="green"
                  />
                  <Checkbox
                    checked={checkboxStates.advanced}
                    onChange={(e) =>
                      setCheckboxStates((prev) => ({
                        ...prev,
                        advanced: e.target.checked,
                      }))
                    }
                    label="高级选项"
                    size="sm"
                    color="green"
                  />
                  <Checkbox disabled label="禁用选项" size="sm" />
                </div>
              </div>

              {/* 查看更多链接 */}
              <a
                href={getPath("/docs/components/checkbox")}
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm group transition-colors duration-200"
              >
                查看文档
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Drawer 组件卡片 */}
            <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              {/* 字母标识 */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">D</span>
              </div>

              {/* 组件标题 */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Drawer
              </h3>

              {/* 组件描述 */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                可从多个方向弹出的抽屉组件，支持自定义内容和页脚
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Button size="sm" onClick={() => setDrawerOpen(true)}>
                  打开抽屉
                </Button>
              </div>
              <a
                href={getPath("/docs/components/drawer")}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm group transition-colors duration-200"
              >
                查看文档
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="抽屉示例"
              >
                <p>这是一个抽屉组件的示例</p>
                <p className="mt-4">你可以在这里放置任何内容</p>
              </Drawer>
            </div>

            {/* 更多组件卡片 */}
            <div className="card p-8 rounded-xl hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4 transition-theme duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="m15.5 3.5-1.5 1.5m0 0L12 7l-2-2-1.5-1.5"></path>
                  <path d="m6.5 15.5 1.5-1.5m0 0L10 12l2 2 1.5 1.5"></path>
                  <path d="m20.5 8.5-1.5 1.5m0 0L17 12l-2-2-1.5-1.5"></path>
                  <path d="m3.5 15.5 1.5-1.5m0 0L7 12l2 2 1.5 1.5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-theme duration-300">
                更多组件
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm transition-theme duration-300">
                更多组件正在开发中...
              </p>
            </div>
          </div>

          {/* 浏览全部组件链接 */}
          <div className="text-center">
            <a
              href={getPath("/docs/components/button")}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              浏览全部组件
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* 为什么选择 Kitty UI */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              为什么选择 Kitty UI？
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              精心打造的现代化组件库，为您的项目提供完整的设计解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 特性卡片 1 - 函数驱动 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                🚀 函数驱动
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                基于 React Hooks 设计的函数式 API，提供灵活的逻辑复用能力
              </p>
            </div>

            {/* 特性卡片 2 - 类型友好 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 hover:shadow-xl dark:hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-green-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                🛠️ 类型友好
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                使用 TypeScript 构建，提供完整的类型定义，享受一流的开发体验
              </p>
            </div>

            {/* 特性卡片 3 - 轻量高效 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                📦 轻量高效
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                基于 Tailwind CSS，支持按需引入，让您的应用保持轻量快速
              </p>
            </div>

            {/* 特性卡片 4 - 响应式设计 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl dark:hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                📱 响应式设计
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                支持各种屏幕尺寸的响应式布局，完美适配移动端和桌面端
              </p>
            </div>

            {/* 特性卡片 5 - 暗黑主题 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl dark:hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                🌙 暗黑主题
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                内置完整的暗黑主题支持，提供流畅的主题切换体验
              </p>
            </div>

            {/* 特性卡片 6 - 开源友好 */}
            <div className="group text-center p-8 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 hover:shadow-xl dark:hover:shadow-red-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden relative">
              {/* 背景动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent dark:from-red-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 图标容器 */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-red-500/30">
                <svg
                  className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              {/* 标题 */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                ☃️ 开源友好
              </h3>

              {/* 描述文字 */}
              <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300 transform group-hover:translate-y-1">
                完全开源，提供完整的中文文档和社区支持
              </p>
            </div>
          </div>
        </section>

        <section className="card rounded-2xl p-12 shadow-sm transition-all duration-300">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 transition-theme duration-300">
            快速开始
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-theme duration-300">
                  安装
                </h3>
                <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-6 transition-theme duration-300">
                  <code className="text-green-400 dark:text-green-300 text-sm">
                    npm install kitty-react
                  </code>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-theme duration-300">
                  使用
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-theme duration-300">
                  导入所需的组件并在你的 React 应用中使用：
                </p>
              </div>
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-theme duration-300">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto transition-theme duration-300">
                    <code>{`// 安装组件库
npm install kitty-react

// 使用组件
import { Button, Checkbox } from 'kitty-react';

function App() {
  return (
    <div>
      <Button variant="primary">
        开始使用
      </Button>
      <Checkbox label="同意条款" />
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
