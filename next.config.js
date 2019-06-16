const isProd = process.env.STAGE === 'production'
const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
    assetPrefix: isProd ? 'https://assets.xxx.com' : '',
    distDir: 'build',
    generateBuildId: async () => {
        return 'serverless-nextjs'
    },
    target: 'serverless'
};

module.exports = withTypescript(nextConfig);
