// GitHub Pages のサブパス配信でも public/ 配下の画像が解決できるようにする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
