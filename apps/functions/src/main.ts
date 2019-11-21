// (global as any).WebSocket = require('ws');
// (global as any).XMLHttpRequest = require('xhr2');
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as functions from 'firebase-functions';
import 'zone.js/dist/zone-node';
import { musicLand } from './app/music-land';
import { webApp } from './app/web-app';

const { renderModuleFactory } = require('@angular/platform-server');


enableProdMode();

// const { AppServerModuleNgFactory } = require('../../../dist/apps/web-app/server/main');

// const index = require('fs')
//   .readFileSync(path.resolve('dist/apps/web-app/index.html'), 'utf8')
//   .toString();

const app = express();

const webapp = app.get('**', function (req, res) {
  renderModuleFactory(webApp.AppServerModuleNgFactory, {
    url: req.path,
    document: webApp.index
  }).then(html => res.status(200).send(html));
});

exports.server = functions.https.onRequest(webapp);

const musicland = app.get('**', function (req, res) {
  renderModuleFactory(musicLand.AppServerModuleNgFactory, {
    url: req.path,
    document: musicLand.index
  }).then(html => res.status(200).send(html));
});

exports.server = functions.https.onRequest(musicland);
