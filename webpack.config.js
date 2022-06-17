const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    target: 'web',
    devServer: {
        port: 3000,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', "css-loader"]
            },
            {
                test: /\.(png|jpg(e*)g|svg|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        ]
    }, 
    plugins: [
        new HtmlwebpackPlugin({
            title: "who-want-to-be-a-millionaira",
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}