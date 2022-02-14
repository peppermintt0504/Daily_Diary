import { createProxyMiddleware } from "http-proxy-middleware";

module.exports =function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target : "http://binscot.shop",
            changeOrigin : true,
        })
    )
}