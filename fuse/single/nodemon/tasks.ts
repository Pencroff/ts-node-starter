/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
import * as path from 'path';
import * as nodemon from 'gulp-nodemon';
import * as Promise from 'bluebird';
import { task } from 'fuse-box/sparky';
import { config } from './config';

const envConfig = require(path.resolve(config.envConfig));
task(config.name, () => new Promise((resolve) => setTimeout(resolve, config.initialDelay))
  .then(() => nodemon({
    script: path.resolve(config.appFile),
    delay: config.restartDelay,
    execMap: {
      js: `node --debug=${config.hostPort} --inspect`, // --debug-brk
    },
    ext: 'js',
    env: envConfig,
  })),
);
