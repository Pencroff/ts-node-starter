/**
 * Created by Sergey Daniloff on 02.04.2018.
 */

import * as path from 'path';
import * as del from 'del';
import { src, task } from 'fuse-box/sparky';
import { config } from './config';

task(config.name, () => del([path.resolve(config.distFolder)]));
task(`${config.name}:test`, () => del([path.resolve(config.testMask)]));
