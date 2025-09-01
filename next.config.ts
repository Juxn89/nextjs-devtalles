import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "i.pinimg.com" },
			{ protocol: "https", hostname: "avatars.githubusercontent.com" },
			{ protocol: "https", hostname: "lh3.googleusercontent.com" },
		]
	}
  /* config options here */
};

export default nextConfig;
