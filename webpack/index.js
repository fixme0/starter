import { mainConfig } from './main';
import { devConfig } from './dev';
import { prodConfig } from './prod';
import merge from 'webpack-merge';


export default (...[, { mode }]) => {
  let computedConfig = {};
  const isDevelompent = mode === 'development';

  if (isDevelompent) {
    computedConfig = { ...devConfig };
  } else {
    computedConfig = { ...prodConfig };
  }

  return merge(
    mainConfig,
    computedConfig,
  );
};