import React, { useState } from "react";
import { Button, Drawer } from "@my-component-library/ui-core";

export default function IndexLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">我的组件库</h1>
          <p className="text-xl text-gray-600 mb-8">
            一个现代化的React组件库，基于Tailwind CSS构建
          </p>
          <div className="flex justify-center gap-4">
            <a href="/docs">
              <Button>开始使用 →</Button>
            </a>
            <a href="https://github.com/l630630/Master" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
          </div>
        </header>

        <main>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">组件预览</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 按钮组件卡片 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">按钮</h3>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">按钮</Button>
                  <Button variant="secondary" size="sm">按钮</Button>
                  <Button variant="outline" size="sm">按钮</Button>
                </div>
                <div className="mt-4">
                  <a href="/docs/components/button" className="text-blue-600 hover:underline text-sm">
                    查看文档 →
                  </a>
                </div>
              </div>
              
              {/* 抽屉组件卡片 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">抽屉</h3>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={() => setDrawerOpen(true)}>打开抽屉</Button>
                </div>
                <div className="mt-4">
                  <a href="/docs/components/drawer" className="text-blue-600 hover:underline text-sm">
                    查看文档 →
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
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-200">
          <p>© {new Date().getFullYear()} 我的组件库. 版权所有.</p>
        </footer>
      </div>
    </div>
  );
} 