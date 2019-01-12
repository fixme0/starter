import { resolve } from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

export const mainConfig = {
  entry: [
    './src/js/app.js',
    './src/style/app.sass'
  ],
  output: {
    path: resolve(__dirname, '../', 'public'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.pug$/, loader: 'pug-loader', options: { pretty: true } },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file-loader', options: { name: 'images/[name].[ext]', } },
      { test: /\.(ttf|eot|woff|woff2)$/, loader: 'file-loader', options: { name: "fonts/[name].[ext]", publicPath: '../' } },
      { test: /\.svg$/, loader: 'svg-sprite-loader', options: { extract: true, spriteFilename: 'images/sprite.svg' } }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      minify: false
    }),
    new SpriteLoaderPlugin({
      plainSprite: true
    }),
  ]
};