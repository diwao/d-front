'use strict';

// common modules
const { dest } = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// modules
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfigDev = require('../webpack.dev');
const webpackConfigProd = require('../webpack.prod');

// task
const transpileTs = (done) => {
  const mode = process.env.NODE_ENV;
  const webpackConfig =
    mode === 'development' ? webpackConfigDev : webpackConfigProd;

  const conf = require('../config');
  const destTs = conf.dest + conf.script.dest;
  webpackStream(webpackConfig, webpack)
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(dest(destTs));
  done();
};

module.exports = transpileTs;
