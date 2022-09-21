import { useLocation } from "react-router";
import { TwitterApi } from "twitter-api-v2";
import { actionTypes } from "./actionTypes";
import {
  REDIRECT_URI_LOCAL,
  TWITTER_API_URLS,
  TWITTER_APP_KEYS,
} from "./twitterApiUrls";
import React from "react";
import { data } from "browserslist";
import Client, { auth } from "twitter-api-sdk";

// const authClient = new auth.OAuth2User({
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   callback: "http://localhost:3000/",
//   scopes: ["tweet.read", "users.read"],
// });

// const client = new TwitterApi({
//   appKey: TWITTER_APP_KEYS.CONSUMER_KEY,
//   appSecret: TWITTER_APP_KEYS.CONSUMER_SECRET,
// });

// export const getResponseHeaders = () => {
//   // debugger;
//   let headers;
//   client.generateAuthLink(encodeURI(REDIRECT_URI_LOCAL)).then((res) => {
//     headers = res;
//   });

//   // console.log(resp);

//   return headers;
//   // debugger;
//   // console.log(redirectResponseHeaders);
//   //   return redirectResponseHeaders;
// };

// export const getAccessToken = (code, codeVerifier) => {
//   const client1 = new TwitterApi({
//     clientId: TWITTER_APP_KEYS.CLIENT_ID,
//     clientSecret: TWITTER_APP_KEYS.CLIENT_SECRET,
//   });
//   // debugger;
//   console.log("code", code);
//   console.log("verfier", codeVerifier);
//   client1
//     .login({
//       code,
//       codeVerifier,
//       redirectUri: REDIRECT_URI_LOCAL,
//     })
//     .then(({ client: loggedClient, accessToken, refreshToken, expiresIn }) => {
//       loggedClient.v2.me().then(({ data: userObject }) => {
//         debugger;
//         console.log("data", userObject);
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

const authClient = new auth.OAuth2User({
  client_id: TWITTER_APP_KEYS.CLIENT_ID,
  client_secret: TWITTER_APP_KEYS.CLIENT_SECRET,
  callback: REDIRECT_URI_LOCAL,
  scopes: ["tweet.read", "users.read"],
});

const client = new Client(authClient);

const STATE = "my-state";

export const getAuthUrl = () => {
  return authClient.generateAuthURL({
    code_challenge_method: "s256",
    state: STATE,
  });
};

export const getAccessToken = async (code, state) => {
  console.log("code", code);
  console.log("state", state);

  if (state !== STATE) throw new Error("state didnt match");

  const token = await authClient.requestAccessToken(code);

  console.log("token", token);
};
