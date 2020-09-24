import React from "react";
import loginform_container from './session/loginform_container'
import signupform_container from "./session/signupform_container";
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from "./home/home";

const App = () => (
    <div className='mainApp'>
        <h1>Bestfriend Treehouse</h1>
        <LoginContainer />
        <Home />

        <Switch>
            {/* <Route exact path="/" component={home_container} /> */}
            <AuthRoute path="/signup" component={signupform_container} />
            <AuthRoute path="/login" component={loginform_container} />
        </Switch>
        
    </div>
);

export default App;