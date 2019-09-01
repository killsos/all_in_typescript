import { Plugin } from 'webpack'

const resolve: Function = require('../utils/resolve')
const HTMLPlugin = require('html-webpack-plugin')

const commonPlugins: Plugin[] = [
  new HTMLPlugin({
    template: resolve('index.html'),
    filename: 'index.html',
    title: 'all in typescript',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    },
  })
]

module.exports = commonPlugins

export {}
