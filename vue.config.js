const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      //配置全局scss
      sass: {
        additionalData: `@import "./src/assets/scss/global.scss";`,
      },
    },
  },
});
