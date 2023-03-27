const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ld3igodwbj.execute-api.us-west-2.amazonaws.com/prod',
      changeOrigin: true,
    })
  );
};