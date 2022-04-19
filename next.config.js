module.exports = {
  reactStrictMode : true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  },
  rewrites: async () => {
    return [
      {
        source: "/public/SteinsFishingTaleBuild/Web Build/index.html",
        destination: "/pages/api/SteinsFishingTale.js",
      }
    ]
}
}