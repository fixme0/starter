// core
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';

// instruments
import { getJsRules, getStyleRules, getFilesRules, getTemplateRules } from './rules';
import appPaths from './paths';

const { root } = appPaths;

export const webpackProdConfig = (mode) => {

  return {
    mode,
    devtool: false,
    module: {
      rules: [
        getJsRules(mode),
        ...getFilesRules(mode),
        getStyleRules(mode),
        getTemplateRules(mode)
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new CleanWebpackPlugin(['public'], { root }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|)$/i,
        options: {
          enforce: 'pre'
        } 
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  };
}