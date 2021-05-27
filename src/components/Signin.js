import React,{useContext,useRef,useState} from 'react'
import {AuthContext} from "../Context/context"
import VDBG from "./assets/vdbg.mp4"
import {Link,useHistory} from "react-router-dom"

export default function Signin() {
  const {LogIn,Facebook,Google,Github}=useContext(AuthContext)
  const emailRef=useRef()
  const passwordRef=useRef()
  const [errors,setErrors]=useState()
  const [loading,setLoading]=useState(false)
  const history =useHistory()

  const onSignIn=async(e)=>{
    e.preventDefault()
    try{
      await LogIn(emailRef.current.value,passwordRef.current.value)
      history.push("/profile")
      setLoading(true)
      setErrors('')
    }catch{
      setErrors("Please check the information")
      
    }
    setLoading(false)
  }

  const onSocialSignIn=async(provider)=>{
    try{
       await provider()
       history.push("/profile")
       setErrors("")
       setLoading(true)
    }catch{
        setErrors("failed to sign in")
    }
    setLoading(false)
  }

  return (
    <div className="signin_main">
       <video autoPlay loop muted className="vdbg">
        <source  src={VDBG} />
      </video>
      <Link to="/"><i className="fas fa-angle-left exit"></i></Link>
       <div className="signin_container">

           <h1> Sign In </h1>
           {errors &&<p className="error">{errors}</p> }
           <form onSubmit={onSignIn}>
               <div className="input_box">
                 <label > Email</label>
                 <input type="email" placeholder="email address"  required ref={emailRef} />
               </div>

               <div className="input_box">
                 <label >Password</label>
                 <input type="password" placeholder="password" required ref={passwordRef} />
               </div>
                 <button disabled={loading} type="submit">Sign In</button>
           </form>
           <p>or</p>
           <div className="social_auth">
             <i className="fab fa-facebook facebook" onClick={()=>onSocialSignIn(Facebook)}></i>
             <i className="fab fa-google google" onClick={()=>onSocialSignIn(Google)}></i>
             <i className="fab fa-github" onClick={()=>onSocialSignIn(Github)}></i>
           </div>
           <p>Need to create account? <Link to="/signup" className="showsignup" >Sign Up</Link></p>
       </div>
    
    </div>
    )
}
