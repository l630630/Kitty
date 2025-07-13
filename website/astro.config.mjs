import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const REPO_NAME = "Kitty";

export default defineConfig({
  // 添加 GitHub Pages 部署配置
  site: `https://l630630.github.io`,
  // 本地开发时注释掉 base 配置
  base: `/${REPO_NAME}`,
  build: {
    assets: "_astro",
  },
  integrations: [
    mdx(),
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
});
