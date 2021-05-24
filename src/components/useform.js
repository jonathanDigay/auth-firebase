import {useContext,useState,useEffect} from 'react'
import {UseAuth} from "../context/authcontext"
import {validate} from "./validate"
import {useHistory} from "react-router-dom"

export function UseForm() {
  const history =useHistory()
  const {SignUp,currentUser,SignIn,LogOut} =UseAuth()
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState({
    signinerror:"",
    signuperror:""
  })
  const [values,setValues]=useState({
    signupemail:"",
    signuppassword:"",
    signupconfirmpassword:"",
    signinemail:"",
    signinpassword:""
  })

  const handleOnChange=(e)=>{
        const {name,value}=e.target
        setValues({...values,[name]:value})
        console.log(name, values)
  }
  const handleOnSignUp=async(e)=>{
      e.preventDefault()
      setError(validate(values))

      console.log(error)

      try{
       await SignUp(values.signupemail,values.signuppassword)
       setLoading(true)
       setError({...error, signuperror:""})
       history.push("/")
      }catch{
       setLoading(false)
       setError({...error, signuperror:"Filed to signng up"})
      }
  }
  
  const handleOnSignIn=async(e)=>{
    e.preventDefault()
    setError(validate(values))
 
    if(!error)return
    console.log("no error")

    try{
     await SignIn(values.signinemail,values.signinpassword)
     setLoading(true)
     setError({...error, signinerror:""})
     history.push("/")
    }catch{
     setLoading(false)
    setError({...error, signinerror:"Filed to logging in"})
    }
}


const handleOnLogOut=async(e)=>{
  e.preventDefault()
      
  try{
     await LogOut()
     history.push("./signin")
  }catch{

  }
}

  return {handleOnChange,values,handleOnSignUp,handleOnSignIn,handleOnLogOut,error,loading,currentUser}
}
