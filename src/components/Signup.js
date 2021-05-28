import React,{useContext,useState,useRef} from 'react'
import {AuthContext} from "../userscontext/context"
import VDBG from "./assets/vdbg.mp4"
import {Link,useHistory} from "react-router-dom" 

export default function Signup() {
  const {SignUp,currentUser}=useContext(AuthContext)
  const usernameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()  
  const confirmPasswordRef=useRef()
  const [errors,setErrors]=useState()
  const [loading,setLoading]=useState(false)
  const history =useHistory()

  const onSignUp=async(e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== confirmPasswordRef.current.value)
    return setErrors("password didn't match")
    if(passwordRef.current.value.length < 6)
    return setErrors("atleast 6 character")
    if(passwordRef.current.value.length >10)
    return setErrors("pasword is too long")
    
    try{
      setLoading(true)
      setErrors('')
      await SignUp(emailRef.current.value,passwordRef.current.value)
      history.push("/profile")
    }catch{
      setErrors("Try again")
    }
    setLoading(false)
  }
  return (
    <div className="signup_main">
             <video autoPlay loop muted className="vdbg">
        <source  src={VDBG} />
      </video>
      <Link to="/"><i className="fas fa-angle-left exit"></i></Link>
       <div className="signup_container">
           <h1> Sign Up </h1>
           {errors &&<p className="error">{errors}</p> }
           <p>{currentUser && currentUser.email }</p>
           <form onSubmit={onSignUp}>
           <div className="input_box">
                 <label >Username</label>
                 <input type="text" placeholder="username" ref={usernameRef} required />
               </div>

               <div className="input_box">
                 <label > Email</label>
                 <input type="email" placeholder="email address" ref={emailRef} required/>
               </div>

               <div className="input_box">
                 <label >Password</label>
                 <input type="password" placeholder="password" ref={passwordRef} required/>
               </div>

               
               <div className="input_box">
                 <label >confirm password</label>
                 <input type="password" placeholder="confirm password" ref={confirmPasswordRef} required/>
               </div>

                 <button disabled={loading} type="submit">Sign In</button>
           </form>
           <p>or</p>
           <div className="social_auth">
             <i className="fab fa-facebook facebook"></i>
             <i className="fab fa-google google"></i>

           </div>
           <p>Already have an account? <Link to="/signin" className="showsignin" >Sign In</Link></p>
       </div>
    
    </div>
    )
}
