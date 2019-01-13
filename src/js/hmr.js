const includePugFiles = () => {
  require.context('./../', true, /\.pug$/)
        .keys()
        .forEach((path) => require(`./../../src/${path.slice(2)}`));
}

includePugFiles();