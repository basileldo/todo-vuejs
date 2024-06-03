module.exports = {
  pwa: {
    name: 'Vue ToDo App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#42B883'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
};
