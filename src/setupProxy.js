const proxy = require("http-proxy-middleware");

// This proxy redirects requests to /api endpoints to
// the Express server running on port 3001.
module.exports = function(app) {
  app.use(
    "/api/users",
    proxy({
      target: "http://montageartmedia.herokuapp.com/",
      "secure": false,
     "changeOrigin": true
    })
  );
};