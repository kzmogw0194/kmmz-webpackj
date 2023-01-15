const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/main.js",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { "targets": "> 5%, not dead" }],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
