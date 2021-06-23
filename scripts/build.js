const { build } = require('electron-builder');

build({
  config: {
    appId: 'com.bar38.Holdon',
    productName: 'HoldOn',
    files: ['app/**/*'],
    asar: true,
    win: {
      target: "portable",
      icon: "app/holdon.png"
    }
  },
});