import React, { useState } from "react";
import { auth } from "../Function/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";

const Login = ({ ShowForgetPass, setShowForgetPass }) => {
  let [login, setLogin] = useState({ email: "", password: "" });
  let [loader, setLoader] = useState(false);

  const handlelogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault()
    try {
      setLoader(true);
      await signInWithEmailAndPassword(auth, login.email, login.password);
      setLoader(false);
      setLogin({ email: "", password: "" })
      console.log(auth.currentUser)
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };

  return (
    <form className="login-box" autoComplete="off" onSubmit={(e) => {
        loginUser(e);
      }}>
      <div className="login-email-box">
        <label htmlFor="login-email">
          <i className="ri-mail-fill" />
        </label>
        <input
          type="email"
          id="login-email"
          placeholder="Email"
          required
          value={login.email}
          name="email"
          onChange={(e) => {
            handlelogin(e);
          }}
        />
      </div>
      <div className="login-password-box">
        <label htmlFor="login-pwd">
          <i className="ri-lock-password-fill" />
        </label>
        <input
          type="password"
          id="login-pwd"
          placeholder="Password"
          required
          value={login.password}
          name="password"
          onChange={(e) => {
            handlelogin(e);
          }}
        />
      </div>
      <a
        href="#"
        className="forgot-pwd"
        onClick={(e) => {
          e.preventDefault();
          setShowForgetPass(!ShowForgetPass);
        }}
      >
        Forgot Password?
      </a>
      {loader ? (
        <button type="button" className="login-submit-btn">
          <CircularProgress size={"15px"} color="white" />
        </button>
      ) : (
        <button
          type="submit"
          className="login-submit-btn"
        >
          Login
        </button>
      )}
      <div className="mtd">
        <div className="or">
          <div className="line" />
          <span>or</span>
          <div className="line" />
        </div>
        <div className="mtd-btn">
          <button className="login-google-btn" type="button">
            <i className="ri-google-fill" /> Login with Google
          </button>
          <button className="login-github-btn" type="button">
            <i className="ri-github-fill" /> Login with Github
          </button>
          <button className="login-apple-btn" type="button">
            <i className="ri-apple-fill" /> Login with Apple
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
