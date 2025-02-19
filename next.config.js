const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')


module.exports = withCSS({
  cssModules: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
})