const path = require('node:path');

module.exports = {
  mode: "production",
  entry: {
    main: './src/index.js',
    second: ['./src/second.js', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle-[name]-[hash:5].js'
    filename: 'bundle-[id]-[hash:5].js'
  }
};
