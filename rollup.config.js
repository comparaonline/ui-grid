import { resolve } from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import postcss from 'postcss';
import csso from 'postcss-csso';

const jsonImporter = require('node-sass-json-importer');

export default {
  entry: resolve(__dirname, 'src/index.js'),
  dest: resolve(__dirname, 'dist/index.es.js'),
  format: 'es',
  sourceMap: true,
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    json(),
    sass({
      processor: css =>
        postcss([csso])
          .process(css)
          .then(result => result.css),
      options: {
        importer: jsonImporter
      },
      output: resolve(__dirname, 'dist/index.css')
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    uglify({}, minify)
  ]
};
