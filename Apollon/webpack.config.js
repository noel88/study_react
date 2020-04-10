const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index",

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `./public/index.html`
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
        compress: true,
        port: 3000
    }
};
