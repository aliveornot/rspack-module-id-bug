const path = require('path');
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: 'development',
  optimization: {
    moduleIds: 'named',
  },
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  target: 'web',

  resolve: {
    modules: ['c:/src/rspack-bug2/node_modules', 'd:\\src\\rspack-bug\\node_modules', 'node_modules'],
  },
};
