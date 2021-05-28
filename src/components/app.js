import React from "react"
import {Switch, Route } from "react-router-dom"
import { AuthProvider } from "../userscontext/context"
import { Privateroutes } from "../private/privateroutes"
import "./app.scss"
// components
import signin from "./signin"
import signup from "./signup"
import profile from "./profile"
import home from "./home"
const App = () => {
    return (
        <>
                <Switch>
                    <AuthProvider>
                        <Route exact path="/" component={home} />
                        <Route path="/signin" component={signin} />
                        <Route path="/signup" component={signup} />
                        <Privateroutes path="/profile" component={profile} />
                    </AuthProvider>
                </Switch>
        </>
    )
}

export default App