import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { authHandler } from "./lib/handlers/auth";
import { callbackHandler } from "./lib/handlers/callback";

admin.initializeApp();

export const dbRef = admin.firestore().doc("tokens/main");

export const auth = functions.https.onRequest((req, res) => authHandler(res));
export const callback = functions.https.onRequest((req, res) =>
  callbackHandler(req, res)
);
export const like = functions.https.onRequest((req, res) => {});
export const retweets = functions.https.onRequest((req, res) => {});
