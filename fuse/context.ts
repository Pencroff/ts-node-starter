/**
 * Created by Sergey Daniloff on 02.04.2018.
 */

import * as path from 'path';
import { context } from 'fuse-box/sparky';
import { JSONPlugin, FuseBox } from 'fuse-box';
const fbTypechecker = require('fuse-box-typechecker');

context(class {
  private t: any = null;
  get typechecker() {
    if (this.t === null) {
      this.t = fbTypechecker.TypeHelper({
        tsConfig: './tsconfig.json',
        name: 'src',
        basePath: './',
        tsLint: './tslint.json',
        skipDefaultLibCheck: true,
        skipLibCheck: true,
        yellowOnLint: true,
        shortenFilenames: true,
      });
    }
    return this.t;
  }

  public getConfig() {
    return FuseBox.init({
      homeDir: path.resolve('./app'),
      target: 'server', // @es2017
      // log: true,
      // debug: true,
      sourceMaps: { project: true, vendor: false },
      output: path.resolve('./dist/$name.js'),
      plugins: [
        JSONPlugin(),
        // !this.isProduction && WebIndexPlugin(),
        // this.isProduction && QuantumPlugin({
        //   // treeshake: true,
        //   target: 'server',
        //   bakeApiIntoBundle: "vendor"
        // }),
      ],
      alias: {
        '@root': '~/src/'
      },
      useTypescriptCompiler: true,
    });
  }

  public runTypeChecker() {
    // same color..
    console.log(`\x1b[36m%s\x1b[0m`, `app bundled => running type check`);

    // call thread (both are called right away, result comes later)
    this.typechecker.inspectCodeWithWorker(Object.assign(this.typechecker.options, { quit: false, type: 'watch' }));
    this.typechecker.printResultWithWorker();
  }

  public runTypeCheckerOnce() {
    // same color..
    console.log(`\x1b[36m%s\x1b[0m`, `app bundled => running type check`);

    // call thread (both are called right away, result comes later)
    // this.typechecker.inspectCodeWithWorker(Object.assign(this.typechecker.options, { quit: true }));
    // this.typechecker.printResultWithWorker();
    this.typechecker.runSync();
  }
});
