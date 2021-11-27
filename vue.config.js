module.exports = {
  outputDir: "public",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Venda de lanches";
      return args;
    });
  },
  css: {},
};
