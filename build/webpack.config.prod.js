'use strict'

const merge = require('webpack-merge')      // 合并配置
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

const webpackConfigProd = merge(baseWebpackConfig, {
    mode: 'production',         // mode: webpack4 新增的模式
    // 入口
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.js'
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    // webpack4 性能优化
    optimization: { 
        runtimeChunk: {
            // name: 'runtime',
            name: entrypoint => `runtimechunk~${entrypoint.name}`
        },
        minimizer: [
            // 压缩bundle, 定制 TerserPlugin 覆盖默认压缩工具（minimizer）
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks:{       // 动态导入模块，webpack v4+ 全新的通用分块策略
            chunks: 'all',      // 哪些块进行优化，all、async、initial
            minSize: 30000,     // 要生成的块的最小大小（以字节为单位）
            minChunks: 1,       // 分割前必须共享模块的最小块数
            maxAsyncRequests: 5,        // 按需加载时的最大并行请求数
            maxInitialRequests: 3,      // 入口点处的最大并行请求数
            name: false,        // 拆分模块名称
            cacheGroups: {      // 缓存组可以继承和/或覆盖任何选项
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                },
                styles: {
                    name: 'styles',
                    test: /\.(scss|css|less)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    // 'css-loader',
                    // ? 新增
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            sourceMap: true,
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',       // 配置 css className hash 唯一
                            },
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
            },
        ]
    },
    plugins: [
        // 清理/dist 文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',      // 模板
            title: 'React template PC',         // 更改HTML的title内容
            minify: {
                // caseSensitive: false,    //是否大小写敏感
                removeComments: true,       // 去除注释
                collapseWhitespace: true,       // 去除空格
                removeAttributeQuotes: true,        // 去掉属性引用
            }
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
            ignoreOrder: false,
        }),
        // 分析哪些文件体积过大
        new BundleAnalyzerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // filename: "vendor.js"
            // (给 chunk 一个不同的名字)
      
            minChunks: Infinity,
            // (随着 entry chunk 越来越多，
            // 这个配置保证没其它的模块会打包进 vendor chunk)
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ],
})

module.exports = webpackConfigProd