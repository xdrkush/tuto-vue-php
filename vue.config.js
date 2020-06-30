module.exports = {
  publicPath: "",
  outputDir: "dist",
  indexPath: 'index.html',
  assetsDir: "public",
  lintOnSave: true,
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          // Merge all the CSS into one file
          styles: {
            name: 'styles',
            test: /\.(le|c|sc|sa)ss$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}