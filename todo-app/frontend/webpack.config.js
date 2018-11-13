const webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    output:  {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ],
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file-loader'
        }]
    }
}