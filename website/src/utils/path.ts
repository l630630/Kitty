/**
 * 获取基于 BASE_URL 的路径
 * @param path 相对路径
 * @returns 完整路径
 */
export function getPath(path: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // 确保 baseUrl 末尾没有斜杠，path 开头没有斜杠
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${normalizedBase}/${normalizedPath}`;
} 