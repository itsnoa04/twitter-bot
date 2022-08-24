import * as functions from "firebase-functions";
import { dbRef } from "../..";
import twitterClient from "../twitter";

export const CallbackURL =
  "http://127.0.0.1:5001/twitter-actions-bot/us-central1/callback";

export const authHandler = async (res: functions.Response) => {
  const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(
    CallbackURL,
    {
      scope: ["tweet.read", "tweet.write", "users.read", "offline.access"],
    }
  );
  await dbRef.set({
    codeVerifier,
    state,
  });

  res.redirect(url);
};
