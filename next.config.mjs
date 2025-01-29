const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/twelves-storefront/' : '',
  basePath: isProd ? '/twelves-storefront' : '',
  output: 'export'
};

export default nextConfig;