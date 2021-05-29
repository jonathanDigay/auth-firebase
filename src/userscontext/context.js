import {createContext, useEffect,useState} from "react"
import {auth,facebookProvider,googleProvider} from "../firebase"


export const AuthContext=createContext()

// Auth Provider
export function AuthProvider({children}){
const [currentUser,setCurrentUser]=useState()

function SignUp(email,password){
 return auth.createUserWithEmailAndPassword(email,password)
}
function LogIn(email,password){
return auth.signInWithEmailAndPassword(email,password)
}
function LogOut(){
  return auth.signOut()
}
function Facebook(){
  return auth.signInWithPopup(facebookProvider)
}
function Google(){
  return auth.signInWithPopup(googleProvider)
}
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(user=>setCurrentUser(user))
  return unsubscribe
},[])
const value={
  currentUser,
  SignUp,
  LogIn,
  LogOut,
  Facebook,
  Google,
}
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
