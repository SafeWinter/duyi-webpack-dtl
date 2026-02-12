module.exports = {
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    port: 9000,
    open: true,
    openPage: 'list.html',
    proxy: {
      // https://study.duyiedu.com/api/citylist
      // '/back': {
      //   target: 'https://study.duyiedu.com',
      //   pathRewrite: {'^/back': '/api'},
      // },
      '/api': {
        target: 'https://study.duyiedu.com',
      },
    },
  },
}