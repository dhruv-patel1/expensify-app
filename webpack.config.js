//entry point -> output final bundle file
const path = require('path');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/

        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

//loader lets you customize the behavior of webpack
//source map makes debugging faster
//webpack dev server will make changes faster than live server 
