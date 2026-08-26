import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: {
        position: 'bottom-right',
    },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            }
        ]
    },
};

export default nextConfig;
