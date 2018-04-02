/**
 * Created by Sergey Daniloff on 02.04.2018.
 */
require('ts-node/register');

require('./context');
require('./single/delete/tasks');
require('./single/copy/tasks');
require('./single/sources/tasks');
require('./single/nodemon/tasks');

require('./bundle');
