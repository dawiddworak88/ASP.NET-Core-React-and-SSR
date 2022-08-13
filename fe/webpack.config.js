const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var browserConfig = {
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../../dist/css/[name].css",
        }),
        new CleanWebpackPlugin({
            dry: false,
            dangerouslyAllowCleanPatternsOutsideProject: true
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({})
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        homepage: ["./src/pages/HomePage/index.js", "./src/pages/HomePage/HomePage.scss"]
    },
    output: {
        publicPath: path.resolve(__dirname, "../be/src/Project/AspNetCore/wwwroot/dist/js"),
        path: path.resolve(__dirname, "../be/src/Project/AspNetCore/wwwroot/dist/js"),
        filename: "[name].js"
    }
};

module.exports = [browserConfig];