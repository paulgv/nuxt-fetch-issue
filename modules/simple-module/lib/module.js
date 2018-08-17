const { resolve } = require('path')

module.exports = async function module () {
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'simple-module.js'
  })
}
