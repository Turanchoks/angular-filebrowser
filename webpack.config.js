module.exports = {
    context: __dirname + '/src',

    entry: './example/example.js',

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: 'es2015',
            },
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },

    devServer: {
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        inline: true,
        contentBase: __dirname + '/src/example'
    }

};
