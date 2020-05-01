const { CleanWebpackPlugin } = require('clean-webpack-plugin');

import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    
    plugins: [
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns:[paths.outputPath]})
    ],
    devtool: 'source-map'
};
