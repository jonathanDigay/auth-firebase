import React from "react"
import {Switch,Route} from "react-router-dom"
import "./App.scss"
import {AuthProvider} from "../context/authcontext"

import Signin from "./Signin"
import Signup from "./Signup"
import Home from "./Home"

const App=()=>{
  return(
       <AuthProvider>
         <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/signin" component={Signin} />
               <Route path="/signup" component={Signup} />
         </Switch>
      </AuthProvider>

  )
}

export default App