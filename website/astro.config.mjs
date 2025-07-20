import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const REPO_NAME = "Kitty";
const isProd = process.env.NODE_ENV === "production";
// 根据环境设置 base 路径
const base = isProd ? `/${REPO_NAME}` : "";

export default defineConfig({
  // 添加 GitHub Pages 部署配置
  site: `https://l630630.github.io`,
  base,
  build: {
    assets: "_astro",
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
        wrap: true,
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  server: {
    port: 3001,
  },
  trailingSlash: "ignore",
});
