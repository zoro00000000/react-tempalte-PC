'use strict'

const fs = require('fs')
const path = require('path')    //node.js自带的路径参数
const DIST_PATH = path.resolve(__dirname, '../dist')    // 生产目录
const APP_PATH = path.resolve(__dirname, '../src')      // 源文件目录
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

// console.log(process.env.NODE_ENV)

module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    // 出口
    output: {
        filename: 'js/[name].[chunkhash].js',    // 使用hash进行标记
        path: DIST_PATH,
        chunkFilename: 'js/[name].[chunkhash].js',
        // publicPath: '/',        // 将打包的静态文件 链接定位到静态服务器
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader?cacheDirectory=true',
                // include: APP_PATH,
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            sourceMap: true,
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',       // 配置 css className hash 唯一
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: { 
                            javascriptEnabled: true,        // javascriptEnabled: true  ------  在less里面可以使用JavaScript表达式
                        }
                    },
                    {
                        loader: 'postcss-loader',       // 自动加前缀
                        options: {
                            plugins: [
                                require('autoprefixer')({})
                            ]
                        }
                    }
                ],
                // 切记这个地方一定要引入antd，文档上没有写入但是一定要因引进去，切记切记
                // include: [/antd/],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // outputPath: '../',       // 输出**文件夹
                        publicPath: '/',
                        name: 'images/[name].[ext]',
                        limit: 1000,        // 是把小于1000B的文件打成Base64的格式，写入js
                    }
                }]
            },
            {
                test: /\.(woff|svg|eot|woff2|tff)$/,
                use: 'url-loader',
                exclude: /node_modules/
                // exclude 忽略 /node_modules/的文件夹
            }
        ]
    },
    // 增加别名
    resolve: {
        alias: {
            '@page': path.resolve(__dirname, '../src/page'),
            '@routes': path.resolve(__dirname, '../src/routes'),
            '@redux': path.resolve(__dirname, '../src/redux'),
            '@components': path.resolve(__dirname, '../src/components'),
        },
        extensions: ['.js', '.json', '.less']
    },
    plugins: [
        new ProgressBarPlugin({
            format: chalk.blue.bold('  build [:bar] ') + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false, 
            width: 60
        }),
    ]
}