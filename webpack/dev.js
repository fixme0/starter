import { postcssPlugins } from './../postcss.plugins';
import webpack from 'webpack';

const PORT = 9999;

export const devConfig = {
  entry: [
    './src/js/hmr.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: { hmr: true, sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { parser: 'sugarss', sourceMap: true, plugins: postcssPlugins({ isDev: true }) }
          }
        ]
      }
    ]
  },
  devServer: {
    port: PORT,
    hot: true,
    overlay: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      isDev: true
    })
  ]
};