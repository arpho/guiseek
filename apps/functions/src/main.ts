// (global as any).WebSocket = require('ws');
// (global as any).XMLHttpRequest = require('xhr2');
import { enableProdMode } from '@angular/core';
import { firebaseHostingWithFunction } from '@guiseek/backend/hosting';
import * as express from 'express';
import * as functions from 'firebase-functions';
import 'zone.js/dist/zone-node';
import { musicLand } from './app/music-land';
import { webApp } from './app/web-app';


enableProdMode();


const app = express();
exports.server = functions.https.onRequest(
  firebaseHostingWithFunction(app, webApp)
);
exports.server = functions.https.onRequest(
  firebaseHostingWithFunction(app, musicLand)
);
