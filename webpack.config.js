const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    target: "web",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    devtool: "inline-source-maps",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,

                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "/",
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
