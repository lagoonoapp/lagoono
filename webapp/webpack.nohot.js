const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        hot: false,  // Disable hot module replacement
        liveReload: false,  // Disable live reload
        client: false,  // Disable the client overlay and WebSocket entirely
        webSocketServer: false,  // Disable WebSocket server
        allowedHosts: 'all',  // Allow all hosts (fixes the Invalid Host/Origin error)
        devMiddleware: {
            writeToDisk: true,  // Always write to disk
        },
        port: 8088
        /*static: {
            directory: path.join(__dirname, '/public'),
        }*/
    },
    //target: 'web',
    devtool: 'inline-source-map',
    /*stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    }*/
});