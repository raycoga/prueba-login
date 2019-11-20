import React from "react"
import {Route,Switch} from "react-router-dom"


import App from "../componentes/App"
import Login from "../componentes/Login"
import User from "../componentes/User"
import Dashboard from "../componentes/Dashboard"

const Approuting = ()=>
<App>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/User" component={User} />
    </Switch>
</App>

export default Approuting