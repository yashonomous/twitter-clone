import { Button } from "@material-ui/core";
import React from "react";
import { getRequestHeader } from "../commons/twitter";

function Login() {
  const handleLogin = () => {
    getRequestHeader();
  };

  return (
    <div className="w-32 h-16 absolute bottom-0 top-0 left-0 right-0 m-auto  ">
      <Button
        className=" "
        color="primary"
        variant="contained"
        onClick={handleLogin}
      >
        login
      </Button>
    </div>
  );
}

export default Login;
