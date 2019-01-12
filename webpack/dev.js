import { postcssPlugins } from './../postcss.plugins';
import webpack from 'webpack';

export const devConfig = {
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
    port: 9999,
    hot: true,
    overlay: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};