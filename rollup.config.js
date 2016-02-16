import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import * as ts from 'typescript';

export default {
  entry: './src/vl.ts',
  dest: 'vl.js',
  moduleName: 'vl',
  sourceMap: true,

  format: 'umd',

  plugins: [
    typescript({
      target: ts.ScriptTarget.ES6,
      typescript: require('typescript')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
}