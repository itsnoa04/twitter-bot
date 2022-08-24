import * as admin from "firebase-admin";
export const dbRef = admin.firestore().doc("tokens/main");
