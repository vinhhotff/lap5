import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Thêm dòng này để tránh chạy useEffect hai lần
};

export default nextConfig;
