/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const JsxstylePlugin = require('jsxstyle-webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions, cache }) => {
  actions.setWebpackConfig({
    plugins: [new JsxstylePlugin()],
    module: {
      rules: [
        {
          test: /\.(?:jsx?|tsx)$/,
          use: [
            {
              loader: JsxstylePlugin.loader,
              options: {
                cacheFile: path.resolve(cache.directory, 'style-key-cache.txt'),
              },
            },
          ],
        },
      ],
    },
  });
};
