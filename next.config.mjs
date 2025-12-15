/** @type {import('next').NextConfig} */
const nextConfig = {
  // these lines are optional and used to control caching behavior for dynamic/static routes
  // used to prevent caching of dynamic routes in the router while data is frequently changing in the backend
  experimental: {
    staleTimes: {
      dynamic: 0, // No router cache for dynamic routes
      // static: 0, // No router cache for static routes
    },
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pfzlvhtzgyhnjqbvbnfn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // added for static site generation (SSG) with next export
  // only used if all our pages are statically generated
  // output: "export",
};

export default nextConfig;
