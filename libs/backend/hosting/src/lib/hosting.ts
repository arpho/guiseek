import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { Express, static as expressStatic } from 'express';
import * as path from 'path';

enableProdMode();

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('../../../../../dist/apps/web-app/server/main');

const DIST_FOLDER = path.join(process.cwd(), 'dist/apps/web-app');
  /**
 * In production mode run application from dist folder
 */
export function hostWebApp(app: Express) {
  app.use(expressStatic(path.join(__dirname, '/../web-app'), { index: false }));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../web-app/index.html'));
  });
}

export function hostWebAppSsr(app: Express) {
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }))
  app.set('view engine', 'html');
  app.set('views', DIST_FOLDER);

  app.get('*.*', expressStatic(DIST_FOLDER, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  app.get('*', (req, res) => {
    res.render('index', { req });
  });
}
