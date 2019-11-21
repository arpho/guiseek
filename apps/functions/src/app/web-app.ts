const { AppServerModuleNgFactory } = require('../../../../dist/apps/web-app/server/main');
const path = require('path');

const index = require('fs')
  .readFileSync(path.resolve('dist/apps/web-app/index.html'), 'utf8')
  .toString();

export const webApp = {
  AppServerModuleNgFactory,
  index
}
