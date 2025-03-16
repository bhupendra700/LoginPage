import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Function/Firebase";
import { CircularProgress } from "@mui/material";

const SignUp = () => {
  let [signup, setSignUp] = useState({ name: "", email: "", password: "" });
  let [loader, setLoader] = useState(false);

  const handleSignup = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      await createUserWithEmailAndPassword(auth, signup.email, signup.password);

      await signInWithEmailAndPassword(auth, signup.email, signup.password);

      await updateProfile(auth.currentUser, {
        displayName: signup.name,
      });

      await signOut(auth);
      setLoader(false);
      setSignUp({ name: "", email: "", password: "" })
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };

  return (
    <form
      className="signup-box hide-form"
      autoComplete="off"
      onSubmit={(e) => {
        createUser(e);
      }}
    >
      <div className="signup-name-box">
        <label htmlFor="signup-username">
          <i className="ri-user-3-fill" />
        </label>
        <input
          type="text"
          id="signup-username"
          placeholder="Name"
          required
          name="name"
          value={signup.name}
          onChange={(e) => {
            handleSignup(e);
          }}
        />
      </div>
      <div className="signup-email-box">
        <label htmlFor="signup-email">
          <i className="ri-mail-fill" />
        </label>
        <input
          type="email"
          id="signup-email"
          placeholder="Email"
          required
          name="email"
          value={signup.email}
          onChange={(e) => {
            handleSignup(e);
          }}
        />
      </div>
      <div className="signup-password-box">
        <label htmlFor="signup-pwd">
          <i className="ri-lock-password-fill" />
        </label>
        <input
          type="password"
          id="signup-pwd"
          placeholder="Password"
          required
          name="password"
          value={signup.password}
          onChange={(e) => {
            handleSignup(e);
          }}
        />
      </div>

      {loader ? (
        <button type="submit" className="signup-submit-btn">
          <CircularProgress size={"15px"} color="white" />
        </button>
      ) : (
        <button type="submit" className="signup-submit-btn">
          SignUp
        </button>
      )}
      <div className="mtd">
        <div className="or">
          <div className="line" />
          <span>or</span>
          <div className="line" />
        </div>
        <div className="mtd-btn">
          <button className="signup-google-btn" type="button">
            <i className="ri-google-fill" /> Sign up with Google
          </button>
          <button className="signup-github-btn" type="button">
            <i className="ri-github-fill" /> Sign up with Github
          </button>
          <button className="signup-apple-btn" type="button">
            <i className="ri-apple-fill" /> Sign up withApple
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
