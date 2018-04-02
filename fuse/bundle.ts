/**
 * Created by Sergey Daniloff on 02.04.2018.
 */

import { task } from 'fuse-box/sparky';

task('default', ['dev']);

task('dev', ['delete', 'copy', 'dev-build-host']);

task('build', ['delete', 'copy', 'sources:single']);

task('build:prod', ['delete', 'copy', 'sources:deploy']);

task('dev-build-host', ['&sources:watch', '&nodemon']);
