/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
import * as path from 'path';
import { src, task } from 'fuse-box/sparky';
import { config } from './config';

task(config.name, async () => {
  await src(config.sourceFolder.map((singlePath) => path.resolve(singlePath)))
    .dest(path.resolve(config.distFolder))
    .exec();
});
