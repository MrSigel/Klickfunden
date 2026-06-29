/** @type {import('next').NextConfig} */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseImageHost = supabaseUrl ? new URL(supabaseUrl).hostname : null;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: supabaseImageHost
      ? [
          {
            protocol: "https",
            hostname: supabaseImageHost,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },
};

module.exports = nextConfig;
