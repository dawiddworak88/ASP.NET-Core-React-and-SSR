const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const isProduction = process.env.NODE_ENV === "production";

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
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "../images",
                        publicPath: "/fe/dist/images"
                    }
                }]
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
            filename: "../../dist/css/main.css",
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            disable: !isProduction,
            pngquant: {
                quality: "80-100"
            }
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "wwwroot/fe/src/*.png"),
            to: path.resolve(__dirname, "wwwroot/fe/dist/images") + "/[name].[ext]"
        }])
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        app: "./src/App.js"
    },
    output: {
        publicPath: path.resolve(__dirname, "../../be/src/Project/AspNetCore/wwwroot/dist/js"),
        path: path.resolve(__dirname, "../../be/src/Project/AspNetCore/wwwroot/dist/js"),
        filename: "[name].js"
    }
};

module.exports = [browserConfig];