/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [{
            protocol: 'https',
            hostname: "nest-oxxo-test.s3.amazonaws.com"
        }]
    }
};

export default nextConfig;
