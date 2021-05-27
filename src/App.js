import React from "react"
import {} from "react-router-dom"
import "./app.scss"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {AuthProvider} from "./Context/context"
import {Privateroutes} from "./Private/Privateroutes"
// components
import Home from "./Components/Home"
import SignIn from "./Components/Signin"
import SignUp from "./Components/Signup"
import Profile from './Components/Profile'
const App=()=>{
    return (
        <>
        <Router>
        <Switch>
            <AuthProvider>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Privateroutes path="/profile" component={Profile}/>
            </AuthProvider>
         </Switch>
        </Router>
         </>
    )
}

export default App