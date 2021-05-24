import { load } from "dotenv"
import React,{createContext,useContext,useState,useEffect} from "react"
import { auth } from "../firebase"

const Context=createContext()
export function UseAuth(){
  return useContext(Context)
}


export function AuthProvider({children}){
    
  const [currentUser,setCurrentUser]=useState()
  const [loading,setLoading] =useState(true)

  const SignUp=(email,password)=>{
    return  auth.createUserWithEmailAndPassword(email,password)
  }
  const SignIn=(email,password)=>{
    return auth.signInWithEmailAndPassword(email,password)
  }
  const LogOut=()=>{
    return auth.signOut()
  }
  useEffect(()=>{
    const unsubcribe=auth.onAuthStateChanged(user=>{
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubcribe
  },[])

  const value={
    currentUser,
    SignUp,
    SignIn,
    LogOut
  }
  return(
    <Context.Provider value={value}>
      { !loading && children}
    </Context.Provider>
  )
  
}