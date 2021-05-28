import React from "react"
import "./app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./context/context"
import { Privateroutes } from "./Private/Privateroutes"
// components
import SignIn from "./components/Signin.js"
import SignUp from "./components/Signup.js"
import Profile from "./components/Profile.js"
import Home from "./components/home.js"
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