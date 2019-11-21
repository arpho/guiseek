const { renderModuleFactory } = require('@angular/platform-server');
import { Express } from 'express';

export const firebaseHostingWithFunction = (express: Express, app) => {
  return express.get('**', async (req, res) => {
    return await renderModuleFactory(app.AppServerModuleNgFactory, {
      url: req.path,
      document: app.index
    }).then(html => res.status(200).send(html));
  })
}
