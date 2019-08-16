'use strict'

const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const webpackConfigDev = merge(baseWebpackConfig, {
    mode: 'development',
    entry: [
        // react-hot-loader（jsx）热更新 额外处理
        'react-hot-loader/patch',
        path.join(__dirname, '../src/index.js'),
    ],
    output: {
        filename: 'js/[name].[hash:16].js',
        chunkFilename: '[name].[chunkhash].js',
    },
    // 源错误检查
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        // 处理html
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: {
                html5: true,
            },
            hash: false,
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: '7777',
        contentBase: path.join(__dirname, './public'),      // 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要。
        compress: true,         // 一切服务都启用gzip压缩
        historyApiFallback: true,       // 当使用HTML5历史API时，任意的404响应都可能需要被替代为index.html
        hot: true,      // 启用webpack的模块热替换功能
        https: false,       // dev-server通过HTTP提供服务。也可以选择带有HTTPS的HTTP / 2提供服务
        noInfo: true,       // 隐藏webpack bundle信息之类的消息
        open: true,         // 告诉dev-server在服务器启动后打开浏览器
        proxy: {},
    }
})

module.exports = webpackConfigDev