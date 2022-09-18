import { TwitterApi } from "twitter-api-v2";
import {
  REDIRECT_URI_LOCAL,
  TWITTER_API_URLS,
  TWITTER_APP_KEYS,
} from "./twitterApiUrls";

// const authClient = new auth.OAuth2User({
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   callback: "http://localhost:3000/",
//   scopes: ["tweet.read", "users.read"],
// });

const client = new TwitterApi({
  appKey: TWITTER_APP_KEYS.CONSUMER_KEY,
  appSecret: TWITTER_APP_KEYS.CONSUMER_SECRET,
});

export const getRequestHeader = async () => {
  const authLink = await client.generateAuthLink(REDIRECT_URI_LOCAL);

  return authLink;
};
