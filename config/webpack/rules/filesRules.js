import appPaths from './../paths';
import { resolve } from 'path';

const { imagesFolder, fontsFolder, root, svgFolder } = appPaths;

export const getFilesRules = (mode) => {
  const isProd = mode === 'production';

  return [
    {
      test: /\.(png|jpe?g|gif|svg)$/, 
      loader: 'file-loader', 
      options: { name: `${imagesFolder}/[name].[ext]` },
      include: [ resolve(root, 'src', imagesFolder) ],
      exclude: [ resolve(root, 'src', svgFolder) ]
    },
    { 
      test: /\.(ttf|eot|woff|woff2)$/, 
      loader: 'file-loader', 
      options: { name: `${fontsFolder}/[name].[ext]` } 
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
      },
      include: [ resolve(root, 'src', svgFolder) ],
      exclude: [ resolve(root, 'src', imagesFolder) ]
    }
  ];
}