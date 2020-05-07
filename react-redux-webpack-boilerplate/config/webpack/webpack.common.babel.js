import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

import paths from './paths';
import rules from './rules';

module.exports = {
    entry: paths.entryPath,
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ModuleFederationPlugin({
            name: "app1",
            library: { type: "var", name: "app1" },
            filename: 'remoteEntry.js',
            remotes: {
                app2: "app2",
                app3: "app3"
              },
            shared: ["react", "react-dom"]
          }),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
