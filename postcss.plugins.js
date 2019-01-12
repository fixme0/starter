import postcssPartialImport from 'postcss-partial-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer'

import postcssAdvancedVariables from 'postcss-advanced-variables';
import postcssSelectorMatches from 'postcss-selector-matches';
import postcssSize from 'postcss-size';
import postcssPosition from 'postcss-position';
import postcssAutomath from 'postcss-automath';
import postcssSassyMixins from 'postcss-sassy-mixins';
import postcssCssVariables from 'postcss-css-variables';
import postcssDefineFunction from 'postcss-define-function';

export const postcssPlugins = ({ isDev }) => {

  let devPlugins = [];

  if (!isDev) {
    devPlugins = [
      autoprefixer({
        browsers: [ 'last 5 versions' ]
      })
    ];
  }

  return [
    postcssPartialImport(),
    postcssNested(),
    postcssAdvancedVariables(),
    postcssSelectorMatches(),
    postcssSize(),
    postcssPosition(),
    postcssAutomath(),
    postcssSassyMixins(),
    postcssCssVariables(),
    postcssDefineFunction(),

    ...devPlugins
  ];
};