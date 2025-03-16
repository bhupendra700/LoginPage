import React, { useEffect, useState } from "react";
import "../CSS/Register.css";
import {
  loginform,
  logingreetBox,
  signupform,
  signupgreetBox,
} from "../Function/Register";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SignUp from "./SignUp";

const Register = () => {
  useEffect(() => {
    loginform();
    logingreetBox();
    signupform();
    signupgreetBox();
  }, []);

  let [ShowForgetPass, setShowForgetPass] = useState(false);

  return (
    <>
      <div className="login-signup-box">
        <div className="main-form">
          <section className="usergreet">
            <div className="signup-greet-box ">
              <h1>PassOP</h1>
              <p>
                Don't have account?
                <br />
                Create it with your personal details to use of all site feature
              </p>
              <button
                type="button"
                onClick={() => {
                  signupgreetBox();
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="login-greet-box hidegreet-box">
              <h1>PassOP</h1>
              <p>
                Have a account ?<br /> Login with your personal details to use
                of all site feature
              </p>

              <button
                type="button"
                onClick={() => {
                  logingreetBox();
                }}
              >
                Log In
              </button>
            </div>
          </section>
          <section className="forms">
            <button type="button" className="close-btn">
              <i className="ri-close-large-line" />
            </button>
            <div className="chng-form">
              <button
                type="button"
                className="login-form hover-chngbtn"
                onClick={() => {
                  loginform();
                }}
              >
                Log in
              </button>
              <hr />
              <button
                type="button"
                className="signup-form"
                onClick={() => {
                  signupform();
                }}
              >
                Sign up
              </button>
            </div>
            <Login ShowForgetPass={ShowForgetPass} setShowForgetPass={setShowForgetPass}/>
            <SignUp />
          </section>
        </div>
      </div>
      {ShowForgetPass && (
        <ForgotPassword
          setShowForgetPass={setShowForgetPass}
          ShowForgetPass={ShowForgetPass}
        />
      )}
    </>
  );
};

export default Register;
