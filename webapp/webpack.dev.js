const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        devMiddleware: {
            writeToDisk: (filePath) => {
                return !(/hot-update\.(js|json)$/.test(filePath));
            },
        },
        port: 8088
    },
    devtool: 'inline-source-map'
});