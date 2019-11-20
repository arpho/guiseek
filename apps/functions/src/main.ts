import { app } from '@guiseek/backend/express';
import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });


// import * as functions from 'firebase-functions';
// const universal = require(`${process.cwd()}/dist/apps/webapp/server/main`);
// const universal = require('../../../dist/apps/web-app/server/main');

export const server = functions.https.onRequest(app);
