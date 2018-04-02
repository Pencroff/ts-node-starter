/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
import { task } from 'fuse-box/sparky';
import moment = require('moment');
const typeCheckDelay = 200;

task('sources:single', async (context) => {
  // context.isProduction = true;
  const fuse = context.getConfig();
  fuse.bundle('app')
    .sourceMaps({ inline: false, sourceRoot : './app' })
    .instructions('> [index.ts]')
    .completed((proc) => {
      // run the type checking
      setTimeout(() => {
        console.log(`\x1b[36m%s\x1b[0m`, moment().format('[[]HH:mm:ss[]] [app bundled]'));
        context.runTypeCheckerOnce();
      }, typeCheckDelay);
    });
  fuse.bundle('vendor')
    .instructions('~ index.ts');
  // await fuse.run();
  return fuse.run();
});

task('sources:watch', async (context) => {
  // context.isProduction = true;
  const fuse = context.getConfig();
  context.typechecker.createThread();
  fuse.bundle('app')
  // .hmr()
    .sourceMaps({ inline: false, sourceRoot : './app' })
    .watch()
    .instructions('> [index.ts]')
    .completed((proc) => {
      // run the type checking
      setTimeout(() => {
        console.log(`\x1b[36m%s\x1b[0m`, moment().format('[[]HH:mm:ss[]] [app bundled]'));
        context.runTypeChecker();
      }, typeCheckDelay);
    });
  fuse.bundle('vendor')
    .instructions('~ index.ts');
  await fuse.run();
});

task('sources:deploy', async (context) => {
  context.isProduction = true;
  const fuse = context.getConfig();
  fuse.bundle('app')
    .instructions('> [index.ts]')
    .completed((proc) => {
      setTimeout(() => {
        console.log(`\x1b[36m%s\x1b[0m`, moment().format('[[]HH:mm:ss[]] [app bundled]'));
        context.runTypeCheckerOnce();
      }, typeCheckDelay);
    });
  fuse.bundle('vendor')
    .instructions('~ index.ts');
  await fuse.run();
  return true;
});
