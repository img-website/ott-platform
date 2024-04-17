/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, must-revalidate', // Cache for 1 year (adjust the duration as needed)
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
