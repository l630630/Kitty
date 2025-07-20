import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'dark') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    );
  };

  const getTooltip = () => {
    return theme === 'light' ? '切换到暗黑模式' : '切换到亮色模式';
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle group relative overflow-hidden"
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {/* 背景动画效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

      {/* 图标容器 */}
      <div className="relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
        <div className="transition-all duration-500 ease-in-out">
          {getIcon()}
        </div>
      </div>

      {/* 点击波纹效果 */}
      <div className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-300/30 scale-0 group-active:scale-100 transition-transform duration-150"></div>

      {/* 工具提示 */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 text-xs text-white bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        {getTooltip()}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90 dark:border-t-gray-700/90"></div>
      </div>

      {/* 状态指示器 */}
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </button>
  );
}

export default ThemeToggle;
