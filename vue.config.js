module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/scss/variables.scss";
            @import "@/scss/mixins.scss";
            `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { cleanupIDs: false },
            { collapseGroups: false },
            { removeEmptyContainers: false },
          ],
        },
      });
  },
};
