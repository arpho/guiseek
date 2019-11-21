// tslint:disable-next-line: ordered-imports
// (global as any).musicSland = require('ws');
// (global as any).XMLHttpRequest = require('xhr2');
// tslint:disable-next-line: ordered-imports
// tslint:disable-next-line: ordered-imports
import * as express from 'express';
// tslint:disable-next-line: ordered-imports
import * as fs from 'fs';
import 'zone.js/dist/zone-node';








const { renderModuleFactory } = require('@angular/platform-server');
const path = require('path');

const { AppPrerenderModuleNgFactory } = require('../../../dist/apps/music-land/prerender/main');

const index = require('fs')
  .readFileSync(path.resolve('dist/apps/music-land/index.html'), 'utf8')
  .toString();

const app = express();


const paths = [
  '/about',
  '/brews',
  '/consultancy'];
// enableProdMode();
const distFolder = 'dist/apps/music-land/prerender'
paths.forEach(p => renderToHtml(p, distFolder + p));

function renderToHtml(url: string, folderPath: string): void {
  // Render the module with the correct url just
  // as the server would do
  renderModuleFactory(AppPrerenderModuleNgFactory, {
    url,
    document: index
  }).then(html => {
    // create the route directory
    if (url !== '/index.html') {
      fs.mkdirSync(folderPath);
    }
    fs.writeFile(folderPath + '/index.html', html, (err => {
      if (err) {
        throw err;
      }
      console.log(`success`);
    }))
  })
}
// import { enableProdMode } from '@angular/core';
// import { renderModuleFactory } from '@angular/platform-server';
// import * as fs from 'fs';
// import * as path from 'path';
// import 'zone.js/dist/zone-node';


// const {
//   AppPrerenderModuleNgFactory
// } = require('../../../../../dist/apps/music-land/prerender/main');

// const distFolder = './dist';
// const index = fs
//   .readFileSync(path.resolve(__dirname, `${distFolder}/index.html`), 'utf8')
//   .toString();

// // we could automate this based on the app.routes.ts file but
// // to keep it simple let's just create an array with the routes we want
// // to prerender
// const paths = [
//   '/about',
//   '/brews',
//   '/consultancy'];
// enableProdMode();

// // for every route render the html and save it in the correct folder
// paths.forEach(p => renderToHtml(p, distFolder + p));

// // don't forget to overwrite the index.html as well
// renderToHtml('/index.html', distFolder);

// function renderToHtml(url: string, folderPath: string): void {
//   // Render the module with the correct url just
//   // as the server would do
//   renderModuleFactory(AppPrerenderModuleNgFactory, {
//     url,
//     document: index
//   }).then(html => {
//     // create the route directory
//     if (url !== '/index.html') {
//       fs.mkdirSync(folderPath);
//     }
//     fs.writeFile(folderPath + '/index.html', html, (err => {
//       if (err) {
//         throw err;
//       }
//       console.log(`success`);
//     }))
//   })
// }

// import 'zone.js/dist/zone-node';

// import { renderModuleFactory } from '@angular/platform-server';
// import { existsSync, writeFileSync } from 'fs';
// import { mkdirSync } from 'mkdir-recursive';

// if (process.env.PRERENDER) {

//   const routes = require('./static.paths').default;
//   Promise.all(
//     routes.map(route =>
//       renderModuleFactory(AppServerModuleNgFactory, {
//         document: template,
//         url: route,
//         extraProviders: [
//           provideModuleMap(LAZY_MODULE_MAP)
//         ]
//       }).then(html => [route, html])
//     )
//   ).then(results => {
//     results.forEach(([route, html]) => {
//       const fullPath = join('./public', route);
//       if (!existsSync(fullPath)) { mkdirSync(fullPath); }
//       writeFileSync(join(fullPath, 'index.html'), html);
//     });
//     process.exit();
//   });

// } else if (!process.env.FUNCTION_NAME) {

//   // If we're not in the Cloud Functions environment, spin up a Node server
//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => {
//     console.log(`Node server listening on http://localhost:${PORT}`);
//   });
// }
