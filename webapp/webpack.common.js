const path = require('path');
//console.log(path.resolve(__dirname, '../server/static/dist'))
module.exports = {
    entry: {
        dashboard: path.resolve(__dirname, './src/dashboard_index.jsx'),
        auth: path.resolve(__dirname, './src/auth_index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '../server/static/dist'),
        //filename: 'bundle.js',
        filename: '[name].bundle.js',
        //path: path.resolve(__dirname, '../server/static/dist'),
        //publicPath: '/static/dist/',
        //chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets: ['@babel/react', '@babel/preset-env'],
                    plugins: ['macros']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader' 
                ]
            }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@node_modules': path.resolve(__dirname, 'node_modules')
        }
    },
};