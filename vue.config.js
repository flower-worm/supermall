module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        /*@ 代表src文件夹的路径*/
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

