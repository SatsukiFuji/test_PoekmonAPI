const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// GitHub Pages用の設定
// docsフォルダ配下を公開範囲に設定
// ビルドの出力先をdocsに設定
module.exports = {
  publicPath: '/github-pages-example-with-vue-router',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
}