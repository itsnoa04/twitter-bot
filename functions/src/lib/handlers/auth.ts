import { dbRef } from "../db";
import twitterClient from "../twitter";

export const CallbackURL =
  "http://127.0.0.1:5001/twitter-memes-bot/us-central1/callback";

export const auth = async (res: Response) => {
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

  Response.redirect(url);
};
