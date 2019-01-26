import appPaths from './../paths';

export const getJsRules = (mode) => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    include: appPaths.root,
    loader: 'babel-loader'
  };
};