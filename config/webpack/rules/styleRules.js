// core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// instrumetns
import appPaths from './../paths';

const { root, svgFolder } = appPaths;

export const getStyleRules = (mode) => {
  switch (mode) {
    case 'development': {
      return {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true, hmr: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, sourceMapContents: false } }
        ]
      };
    }

    case 'production': {
      return {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 3 versions']
                }),
              ],
              sourceMap: false
            }
          },
          { loader: 'resolve-url-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, sourceMapContents: false } }
        ]
      }
    }

    default: return {};
  }
};
