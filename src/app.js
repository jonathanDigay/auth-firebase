import React from "react"
import {Switch, Route } from "react-router-dom"
import { AuthProvider } from "./userscontext/context"
import { Privateroutes } from "./privateroute/privateroutes"
// style
import "./components/app.scss"
// components
import SignIn from "./components/signin"
import SignUp from "./components/signup"
import Profile from "./components/profile"
import Home from "./components/home"
const App = () => {
    return (
        <>
                <Switch>
                    <AuthProvider>
                        <Route exact path="/" component={Home} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Privateroutes path="/profile" component={Profile} />
                    </AuthProvider>
                </Switch>
        </>
    )
}

export default App