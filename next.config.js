

const path = require('path')

module.exports = {
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
  }
}
