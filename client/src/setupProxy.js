const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/user/*", "/category", "/post/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
