import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { TwitterApi } from "twitter-api-v2";
import { actionTypes } from "../commons/actionTypes";
import { useStateValue } from "../commons/StateProvider";
import {
  getAccessToken,
  getAuthUrl,
  getResponseHeaders,
} from "../commons/twitter";
import {
  REDIRECT_URI_LOCAL,
  TWITTER_APP_KEYS,
} from "../commons/twitterApiUrls";

const getHeadersFromSearchQuery = (query) => {
  let params = new URLSearchParams(query);
  let paramsObj = {};
  params.forEach((v, k) => {
    paramsObj[k] = v;
  });
  return paramsObj;
};

function Login() {
  const [{ redirectResponseHeaders }, dispatch] = useStateValue();
  const [redirectUrl, setRedirectUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      // dispatch({
      //   type: actionTypes.SET_REDIRECT_RESPONSE_HEADERS,
      //   redirectResponseHeaders: getResponseHeaders(),
      // });

      console.log(getAuthUrl());

      setRedirectUrl(getAuthUrl());

      // sessionStorage.setItem("codeVerifier", codeVerifier);
      // sessionStorage.setItem("state", state);
      // sessionStorage.setItem("codeChallenge", codeChallenge);
      // setRedirectUrl(url);
    } else {
      const { code, state } = getHeadersFromSearchQuery(location.search);

      if (!state || !code) {
        console.log("user didnt authorise");
        return;
      } else {
        // debugger;
        getAccessToken(code, state);
      }
    }
  }, []);

  return (
    <div className="w-32 h-16 absolute bottom-0 top-0 left-0 right-0 m-auto  ">
      <Button
        className=" "
        color="primary"
        variant="contained"
        onClick={() => {
          window.open(redirectUrl, "_self");
        }}
      >
        login
      </Button>
    </div>
  );
}

export default Login;
