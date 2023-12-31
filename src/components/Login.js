import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { getAuth, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase";  // Import the auth object from your firebase.js

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat!</h2>

        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br /> <br />

        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
