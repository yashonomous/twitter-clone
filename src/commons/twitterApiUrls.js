const BASE_URL = "https://api.twitter.com/";
export const REDIRECT_URI_LOCAL = "https://twitter-clone-8ffe1.web.app/";

export const TWITTER_APP_KEYS = {
  CONSUMER_KEY: "v6c1jP29w6oHkse2TWHn5C3ww",
  CONSUMER_SECRET: "lULcBjSyfhbYY7wQFMvCUS2Tj0xT6zUHrZzHAm7qXq8J7doxoD",
  CLIENT_ID: "emNKQ2J4NG5RazUzRUJBb1V3UjE6MTpjaQ",
  CLIENT_SECRET: "W172EDZpXvQVDt5XEoT6WJcjDpR35woUWqqLnpSBNB2EROEvTd",
};

export const TWITTER_API_URLS = {
  GET_REQUEST_TOKEN: `${BASE_URL}oauth/request_token?oauth_callback=${REDIRECT_URI_LOCAL}`,
};
