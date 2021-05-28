import React from "react"
import {Switch, Route } from "react-router-dom"
import { AuthProvider } from "../userscontext/context"
import { Privateroutes } from "../private/privateroutes"
import "./app.scss"
// components
import SignIn from "./signin"
import SignUp from "./signup"
import Profile from "./profile"
import Home from "./home"
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