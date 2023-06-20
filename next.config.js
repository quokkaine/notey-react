/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true,
        optimzeFonts: false,
        outputStandalone: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
