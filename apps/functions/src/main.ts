// (global as any).WebSocket = require('ws');
// (global as any).XMLHttpRequest = require('xhr2');
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as functions from 'firebase-functions';
const { renderModuleFactory } = require('@angular/platform-server');
const path = require('path');

const { AppServerModuleNgFactory } = require('../../../dist/apps/web-app/server/main');

enableProdMode();

const index = require('fs')
  .readFileSync(path.resolve('dist/apps/web-app/index.html'), 'utf8')
  .toString();

const app = express();

app.get('**', function (req, res) {
  renderModuleFactory(AppServerModuleNgFactory, {
    url: req.path,
    document: index
  }).then(html => res.status(200).send(html));
});

exports.server = functions.https.onRequest(app);
