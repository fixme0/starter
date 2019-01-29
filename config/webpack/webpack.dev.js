// core
import { HotModuleReplacementPlugin } from 'webpack';

export const webpackDevConfig = (mode) => {
  return {
		devtool: 'cheap-module-eval-source-map',
		mode,
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