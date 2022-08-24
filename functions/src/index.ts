import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
export const auth = functions.https.onRequest((req, res) => {});
export const callback = functions.https.onRequest((req, res) => {});
export const like = functions.https.onRequest((req, res) => {});
export const retweets = functions.https.onRequest((req, res) => {});

admin.initializeApp();
