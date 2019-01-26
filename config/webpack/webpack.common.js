// core
import { ProgressPlugin, DefinePlugin, ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

// instruments
import appPaths from './paths';

export const webpackCommon = ({ isDevelopment }) => {
  const { entryPath, templatePath, outputPath } = appPaths;

  return {
    entry: entryPath,

    output: {
      filename: '[name].js',
      path: outputPath,
      chunkFilename: '[name].js'
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
              name:   'vendor',
              chunks: 'all',
              test:   /node_modules/,
          },
        }
      }
    },

    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.sass', '.css', '.jsx', '.json']
    },

    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: templatePath
      }),
      new SpriteLoaderPlugin({
        plainSprite: true
      }),
      new DefinePlugin({
        __DEV__: isDevelopment,
        __PROD__: !isDevelopment
      }),
    new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
      })
    ]
  };
};
