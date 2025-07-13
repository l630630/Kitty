import { Button, Drawer } from "@my-component-library/ui-core";
import React, { useState } from "react";

export default function IndexLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center mb-20">
          <div className="inline-block mb-6 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            ✨ 现代化组件库
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            简洁、高效的<span className="text-blue-600">React组件库</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            基于Tailwind
            CSS构建的高质量React组件，帮助开发者快速构建美观、响应式的用户界面
          </p>
          <div className="flex justify-center gap-4">
            <a href="/docs">
              <Button size="lg">开始使用 →</Button>
            </a>
            <a
              href="https://github.com/l630630/Kitty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </span>
              </Button>
            </a>
          </div>
        </header>

        <main>
          <section className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gray-200 flex-grow"></div>
              <h2 className="text-2xl font-bold text-gray-900 px-6">
                组件预览
              </h2>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 按钮组件卡片 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="18"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">按钮</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  多种样式和尺寸的按钮组件，支持自定义变体
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button size="sm">默认</Button>
                  <Button variant="secondary" size="sm">
                    次要
                  </Button>
                  <Button variant="outline" size="sm">
                    轮廓
                  </Button>
                </div>
                <div className="mt-4">
                  <a
                    href="/docs/components/button"
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium inline-flex items-center"
                  >
                    查看文档
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              {/* 抽屉组件卡片 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="15" y1="3" x2="15" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">抽屉</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  可从多个方向弹出的抽屉组件，支持自定义内容和页脚
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button size="sm" onClick={() => setDrawerOpen(true)}>
                    打开抽屉
                  </Button>
                </div>
                <div className="mt-4">
                  <a
                    href="/docs/components/drawer"
                    className="text-purple-600 hover:text-purple-800 hover:underline text-sm font-medium inline-flex items-center"
                  >
                    查看文档
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
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
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">更多组件</h3>
                <p className="text-gray-600 text-center mb-6">
                  我们正在开发更多组件，敬请期待
                </p>
                <a
                  href="/docs"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
                >
                  浏览所有组件
                </a>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-bold mb-4">
                    为什么选择我们的组件库？
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        基于Tailwind CSS，轻量且高度可定制
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        TypeScript支持，提供完整类型定义
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        符合现代设计趋势，美观且易用
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        持续更新，不断添加新组件
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <pre className="text-sm text-gray-800 overflow-x-auto">
                      <code>{`// 安装组件库
npm install @my-component-library/ui-core

// 使用组件
import { Button } from '@my-component-library/ui-core';

function App() {
  return (
    <Button variant="primary">
      开始使用
    </Button>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 text-sm mt-20 pt-8 border-t border-gray-200">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/l630630/Kitty"
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} 我的组件库 · 版权所有</p>
        </footer>
      </div>
    </div>
  );
}
