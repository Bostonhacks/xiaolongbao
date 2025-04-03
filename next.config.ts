import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:8000/:path*' // Proxy to Backend
  //     }
  //   ]
  // }
  images: {
    remotePatterns: [
        
        // Allow images from the backend API or any other remote source
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8000', // Adjust if your backend runs on a different port
          pathname: '/images/**', // Adjust the path as needed
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // Replace with your actual hostname
          pathname: '/**', // Adjust the path as needed
        },
      ]
  }
};

export default nextConfig;
