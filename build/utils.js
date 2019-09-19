'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')


// ---------Start---------
// 作者: keywin
// 来源: CSDN
// 时间: 2019-06-29
// 原文: https://blog.csdn.net/mate_ge/article/details/81179521
// 说明: 
// ----------End----------

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions, anotherLoader) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
// ---------Start---------
// 作者: keywin
// 来源: https://blog.csdn.net/mate_ge/article/details/81179521
// 时间: 2019-06-29
    if (!!anotherLoader) loaders.push(anotherLoader);
// ----------End---------- 

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
// ---------Start---------
// 作者: keywin
// 来源: https://blog.csdn.net/mate_ge/article/details/81179521
// 时间: 2019-06-29
  var sassResourceLoader = {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../src/assets/sass/global/luckeyword.scss'),
      ]
    }
  }
// ----------End---------- 

// https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
// ---------Start---------
// 作者: keywin
// 来源: https://blog.csdn.net/mate_ge/article/details/81179521
// 时间: 2019-06-29
    sass: generateLoaders('sass', { indentedSyntax: true }, sassResourceLoader),
    scss: generateLoaders('sass', {}, sassResourceLoader),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
// ----------End---------- 

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
