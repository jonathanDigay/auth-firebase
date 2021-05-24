import React from 'react'
import { Link } from "react-router-dom"
import { UseForm } from "./useform"

function Signin() {
  const {values, handleOnChange, handleOnSignIn, error } = UseForm()
  const {signinpassword,signinemail}=values

  return (
    <div className="signin_main">
      <div className="signin_container">
        <h3>Sign In</h3>
        {error.signinerror}
        <form onSubmit={handleOnSignIn}>
          <div className="input_field">
            <label>Password</label>
            <input type="text" placeholder="email"
              name="signinemail"
              value={signinemail}
              onChange={handleOnChange}
            />
            <span>{error.signinemail}</span>
          </div>

          <div className="input_field">
            <label>Confirm Password</label>
            <input type="text" placeholder="password"
              name="signinpassword"
              value={signinpassword}
              onChange={handleOnChange}
            />
            <span>{error.signinpassword}</span>
          </div>

          <button  type="submit">Sign In</button>
        </form>
        <h4>Already an account? <Link to="/signup">Sign up</Link> </h4>
      </div>
    </div>
  )
}

export default Signin
