import { environment } from '@env/backend';
import * as admin from 'firebase-admin';

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(environment.firebase as any),
  databaseURL: `https://${environment.firebase.project_id}.firebaseio.com`,
});


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://gui-seek.firebaseio.com"
// });
