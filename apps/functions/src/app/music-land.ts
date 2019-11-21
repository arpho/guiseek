const { AppServerModuleNgFactory } = require('../../../../dist/apps/music-land/server/main');
const path = require('path');

const index = require('fs')
  .readFileSync(path.resolve('dist/apps/music-land/index.html'), 'utf8')
  .toString();

export const musicLand = {
  AppServerModuleNgFactory,
  index
}
