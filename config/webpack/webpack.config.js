// core
import webpackMerge from 'webpack-merge';

// instruments
import { webpackCommon } from './webpack.common';
import { webpackDevConfig } from './webpack.dev';
import { webpackProdConfig } from './webpack.prod';

export default (...[, { mode }]) => {
  const isDevelopment = mode === 'development';

  return webpackMerge(
    webpackCommon({ isDevelopment, mode }),
    isDevelopment ? webpackDevConfig(mode) : webpackProdConfig(mode)
  );
};
