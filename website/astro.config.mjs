import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const REPO_NAME = "Kitty";

export default defineConfig({
  // 添加 GitHub Pages 部署配置
  site: `https://l630630.github.io`,
  base: `/${REPO_NAME}`,
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
