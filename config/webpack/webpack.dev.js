// core
import { HotModuleReplacementPlugin } from 'webpack';

// instruments
import { getJsRules, getStyleRules, getFilesRules, getTemplateRules } from './rules';

export const webpackDevConfig = (mode) => {
  return {
		devtool: 'cheap-module-eval-source-map',
		mode,
		module: {
				rules: [
					getJsRules(mode),
					getStyleRules(mode),
					...getFilesRules(mode),
					getTemplateRules(mode)
				]
		},
		
		devServer: {
				hot: true,
				historyApiFallback: true,
				host: '0.0.0.0',
				overlay: true,
				port: 3001,
				useLocalIp: true
		},
		plugins: [
				new HotModuleReplacementPlugin()
		]
  };
};