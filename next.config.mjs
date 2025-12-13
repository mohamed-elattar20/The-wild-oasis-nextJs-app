/** @type {import('next').NextConfig} */
const nextConfig = {
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
