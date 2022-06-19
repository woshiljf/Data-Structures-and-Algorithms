const path = require('path');
const os = require('os');
const threads = os.cpus.length;
const configBase = {
  entry: { index: 'src/index.js' },
  output: {
    //custom publicPath
    publicPath: 'https://example.com',
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 包含或者排除编译
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              works: threads,
            },
          },
        ],
      },
    ],
  },
};

module.exports = configBase;
