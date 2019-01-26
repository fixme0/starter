export const getTemplateRules = (mode) => {
  
  return {
    test: /\.pug$/,
    use: [
      {
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ],
  };
}
