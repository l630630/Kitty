import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // 获取系统主题偏好
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // 应用主题到 DOM
  const applyTheme = (newTheme: "light" | "dark") => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    // 移除之前的主题类
    root.classList.remove("light", "dark");

    // 添加新的主题类
    root.classList.add(newTheme);

    // 更新 meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        newTheme === "dark" ? "#0f172a" : "#ffffff",
      );
    }

    setResolvedTheme(newTheme);
  };

  // 初始化主题
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 从 localStorage 读取保存的主题，如果没有则使用系统偏好
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // 如果没有保存的主题，使用系统偏好作为初始值
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
    }
  }, []);

  // 当主题改变时应用新主题
  useEffect(() => {
    applyTheme(theme);

    // 保存到 localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return {
    theme,
    resolvedTheme: theme,
    setTheme,
    setLightTheme,
    setDarkTheme,
    toggleTheme,
  };
}
