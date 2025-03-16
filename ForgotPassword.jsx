// import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import '../CSS/ForgotPassword.css'
// import { auth } from "../../Firebase/Firebase";
import CircularProgress from "@mui/material/CircularProgress";


const ForgotPassword = ({setShowForgetPass , ShowForgetPass}) => {
  let [Email, setEmail] = useState("");

  let [showloader, setShowLoader] = useState(false);

  let [message, setMessage] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      setShowLoader(true);
    //   await sendPasswordResetEmail(auth , Email);
      setShowLoader(false);
      setEmail("")
      setMessage(true)
    } catch (error) {
      setShowLoader(false);
    }
  };

  return (
    <>
      <section className="forget-pwd-container">
        <form
          className="forget-pwd-form"
          autoComplete="off"
          onSubmit={(e) => {
            resetPassword(e);
          }}
        >
          <button
            type="button"
            className="close-forget-btn"
            onClick={() => {
              setShowForgetPass(!ShowForgetPass);
            }}
          >
            <i className="ri-close-large-line" />
          </button>
          <div className="forget-email-box">
            <label htmlFor="forget-email-input">
              <i className="ri-mail-fill" />
            </label>
            <input
              type="Email"
              placeholder="Enter your Email"
              id="forget-email-input"
              required
              onChange={(e) => {
                if(message){
                    setMessage(false);
                }
                setEmail(e.target.value);
              }}
              value={Email}
            />
          </div>
          {showloader ? (
            <button className="forget-btn">
              <CircularProgress size={"15px"} color="white" />
            </button>
          ) : (
            <button type="submit" className="forget-btn">
              Send Email
            </button>
          )}
          <div className="forget-text">
            {message ? (
              <p className="success-text">
                <q>
                Password reset link has been sent to your registered email address.Check your inbox!
                </q>
              </p>
            ) : (
                <p className="bydefault-text">
                  <q>
                  Enter your registered email to receive a password reset link.
                  </q>
                </p>
              ) }
          </div>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;