'use strict'

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/Root.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.mp3$/,
                use:[{
                    loader: 'file-loader',
                }],
            },
            {
                test: /\.tsx?$/,
                use:[{
                    loader: 'ts-loader',
                }],
            },
            {
                test: /\.tsx$/,
                use:[{
                    loader: 'string-replace-loader',
                    options: {
                        search: '// @import *.scss',
                        replace: `const styles = require.context('.', true, /\\.scss$/);
                        styles.keys().forEach(styles);`,
                    },
                }] ,
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders:1,
                            sourceMap: true,
                        },
                    },
                    "postcss-loader",
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'rooms': path.resolve(__dirname, 'src/ui-kit/index.tsx')
        },
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
        chunkFilename: "chunk.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join('./', 'public/index.html'),
            publicPath: './'
        })

    ]
};