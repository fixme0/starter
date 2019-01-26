import { resolve } from 'path';

export default {
  root: resolve(__dirname, '../', '../'),
  outputPath: resolve(__dirname, '../', '../', 'public'),
  entryPath: [
    resolve(__dirname, '../', '../', 'src/app.js'),
    resolve(__dirname, '../', '../', 'src/app.sass'),
  ],
  templatePath: resolve(__dirname, '../', '../', 'src/index.pug'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  styleFolder: 'style',
  jsFolder: 'js',
  svgFolder: 'sprite'
};