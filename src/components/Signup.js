import React,{useState,useRef} from 'react'
import {Link} from "react-router-dom"
import {UseForm} from "./useform"

function Signup(){
  const {values,handleOnChange,handleOnSignUp,error,currentUser,loading}=UseForm()
  const {signupemail, signuppassword, signupconfirmpassword}=values
  return (
    <div className="signup_main">
    <div className="signup_container">
        <h3>Sign Up</h3>
        {currentUser.email}
        {error.signuperror}
        <form  onSubmit={handleOnSignUp}>
          <div className="input_field">
            <label>Email</label>
            <input type="text" placeholder="Email Address"
            name="signupemail"
            value={signupemail}
            onChange={handleOnChange}
            />
            <span>{error.signupemail}</span>
          </div>

          <div className="input_field">
            <label>Password</label>
            <input type="text" placeholder="password"
            name="signuppassword"
            value={signuppassword}
            onChange={handleOnChange}
            />
            <span>{error.signuppassword}</span>
          </div>

          <div className="input_field">
            <label>Confirm Password</label>
            <input type="text" placeholder="confirm password" 
            name="signupconfirmpassword"
            value={signupconfirmpassword}
            onChange={handleOnChange}
            />
            <span>{error.signupconfirmpassword}</span>
          </div>

          <button disabled={loading} type="submit">Sign Up</button>
        </form>
        <h4>Already an account? <Link to="/signin">Sign in</Link> </h4>
    </div>
    </div>
  )
}

export default Signup
