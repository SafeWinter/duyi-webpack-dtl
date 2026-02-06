const DiyPlugin = require('./plugins/DiyPlugin');

module.exports = {
  mode: "development",
  watch: true,
  plugins: [
    new DiyPlugin(),
  ]
};
