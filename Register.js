import React, { useEffect } from 'react'
import '../../CSS/adminCSS/Login.css'
import { loginform , logingreetBox , signupform , signupgreetBox } from '../../Function/LoginFunc'

const Register = () => {

    useEffect(()=>{
        loginform()
        logingreetBox()
        signupform()
        signupgreetBox()
    },[])

  return (
    <div className="login-signup-box">
    <div className="main-form">
      <section className="usergreet">
        <div className="signup-greet-box ">
          <h1>Hello, Friend!</h1>
          <p>
            Don't have account?
            <br />
            Create it with your personal details to use of all site feature
          </p>
          <button type="button" onClick={()=>{signupgreetBox()}}>
            Sign Up
          </button>
        </div>
        <div className="login-greet-box hidegreet-box">
          <h1>Hello, Friend!</h1>
          <p>
            Have a account ?<br /> Login with your personal details to use of
            all site feature
          </p>
          
          <button type="button" onClick={()=>{logingreetBox()}}>
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
            onClick={()=>{loginform()}}
          >
            Log in
          </button>
          <hr />
          <button type="button" className="signup-form" onClick={()=>{signupform()}}>
            Sign up
          </button>
        </div>
        <form className="login-box" autoComplete="off">
          <div className="login-email-box">
            <label htmlFor="login-email">
              <i className="ri-mail-fill" />
            </label>
            <input
              type="email"
              id="login-email"
              placeholder="Email"
              required=""
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
              required=""
            />
          </div>
          <a href="#" className="forgot-pwd">
            Forgot Password?
          </a>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
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
        <form className="signup-box hide-form" autoComplete="off">
          <div className="signup-name-box">
            <label htmlFor="signup-username">
              <i className="ri-user-3-fill" />
            </label>
            <input
              type="text"
              id="signup-username"
              placeholder="Name"
              required=""
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
              required=""
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
              required=""
            />
          </div>
          <button type="submit" className="signup-submit-btn">
            Sign up
          </button>
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
      </section>
    </div>
  </div>
  )
}

export default Register
