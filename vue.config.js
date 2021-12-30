module.exports = {
  outputDir: "public",
  devServer: {
    port: 8085,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "E-commerce";
      return args;
    });
  },
  css: {},
};
