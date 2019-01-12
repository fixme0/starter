import { resolve } from 'path';
import ImageminPlugin from 'imagemin-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { postcssPlugins } from './../postcss.plugins';

export const prodConfig = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|)$/i,
      options: {
        enforce: 'pre'
      } 
    }),
    new MiniCssExtractPlugin({
      filename: "style/app.css",
    }),
    new CleanWebpackPlugin(['public'], { root: resolve(__dirname, '../') }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: { parser: 'sugarss', plugins: postcssPlugins({ isDev: false }) }
          }
        ]
      }
    ]
  }
}