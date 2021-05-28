import React from "react"
import "./app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./userscontext/context"
import { Privateroutes } from "./Private/Privateroutes"
// components
import SignIn from "./components/Signin"
import SignUp from "./components/Signup"
import Profile from "./components/Profile"
import Home from "./components/Home"
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