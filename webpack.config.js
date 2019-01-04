const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      path: __dirname + '/src',
      publicPath: '/',
      filename: 'bundle.js',
    },
    devtool: 'inline-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                      css: ['vue-style-loader', {
                          loader: 'css-loader',
                      }],
                      js: [
                          'babel-loader',
                      ],
                  },
                  cacheBusting: true,
              },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
              test: /\.scss$/,
              use: [
                "css-loader",
                "sass-loader"
              ]
            },
            {
      
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
              ]
            },
            {
      
              test: /\.css$/,
              loaders: ['vue-style-loader', 'css-loader'],
            },
            {
              test: /\.(eot|otf|ttf|woff|woff2)$/,
              use: 'file-loader',
            }
        ],
    },
    resolve: {
      extensions: ['*', '.js']
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
};