const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://www.kopis.or.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/openApi/restful", // 프록시 경로 재작성
      },
    })
  );
};
