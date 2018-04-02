/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
export const config = {
  name: 'nodemon',
  initialDelay: 3 * 1000,
  restartDelay: 300,
  hostPort: 55555,
  appFile: './dist/index.js',
  envConfig: './local_files/env.config.json',
};
