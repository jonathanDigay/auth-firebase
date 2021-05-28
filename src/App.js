import React from "react"
import "./app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./userscontext/context"
import { Privateroutes } from "./private/privateroutes"
// components
import SignIn from "./components/signin"
import SignUp from "./components/signup"
import Profile from "./components/profile"
import Home from "./components/home"
const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <AuthProvider>
                        <Route exact path="/" component={Home} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Privateroutes path="/profile" component={Profile} />
                    </AuthProvider>
                </Switch>
            </Router>
        </>
    )
}

export default App