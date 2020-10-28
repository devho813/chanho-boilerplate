/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')([
  // 트랜스파일 필요한 모듈 추가
]);

module.exports = withPlugins([withBundleAnalyzer, withTM], {
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };

    return config;
  },
});
