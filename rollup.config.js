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

const jsonImporter = require('node-sass-json-importer');

const exportMode = process.env.EXPORT_MODE || 'cjs';
const fileExtension = exportMode === 'es' ? 'es.js' : 'js';

export default {
  entry: resolve(__dirname, 'src/index.js'),
  dest: resolve(__dirname, `dist/index.${fileExtension}`),
  format: exportMode,
  sourceMap: true,
  external: [
    'react',
    'prop-types'
  ],
  plugins: [
    json(),
    sass({
      processor: css =>
        postcss()
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
