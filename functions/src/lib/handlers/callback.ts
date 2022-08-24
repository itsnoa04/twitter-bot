import * as functions from "firebase-functions";
import { dbRef } from "../..";
import twitterClient from "../twitter";
import { CallbackURL } from "./auth";

export const callbackHandler = async (
  req: functions.https.Request,
  res: functions.Response
) => {
  const { code, state } = req.query;
  const dbSnapshot = await dbRef.get();
  const { codeVerifier, state: storedState }: any = dbSnapshot.data();

  if (state !== storedState) {
    throw new Error("State mismatch: " + JSON.stringify(state));
  }

  const { accessToken, refreshToken } = await twitterClient.loginWithOAuth2({
    code: code as string,
    codeVerifier,
    redirectUri: CallbackURL,
  });

  await dbRef.set({ accessToken: accessToken, refreshToken: refreshToken });

  res.sendStatus(200);
};
