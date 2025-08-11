import type { NextConfig } from "next";
import https from "https";

// Only disable SSL verification in development
if (process.env.NODE_ENV === "development") {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com" },
		]
	}
};

export default nextConfig;
