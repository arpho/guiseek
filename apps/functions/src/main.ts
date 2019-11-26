import { enableProdMode } from '@angular/core';
// import { firebaseHostingWithFunction } from '@guiseek/backend/hosting';
import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModuleNgFactory } from 'dist/apps/web-app/server/main';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as path from 'path';
import 'zone.js/dist/zone-node';


enableProdMode();

const index = require('fs')
  .readFileSync(path.resolve('dist/apps/web-app/index.html'), 'utf8')
  .toString();

const app = express();
app.get('**', function(req, res) {
  renderModuleFactory(AppServerModuleNgFactory, {
    url: req.path,
    document: index
  }).then(html => res.status(200).send(html));
});

export const server = functions.https.onRequest(app);

