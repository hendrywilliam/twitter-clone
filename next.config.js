/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.URL,
    SUPABASE_KEY: process.env.KEY,
  },
};

module.exports = nextConfig;
