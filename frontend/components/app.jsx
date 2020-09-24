import React from "react";
import loginform_container from './session/loginform_container'
import signupform_container from "./session/signupform_container";
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from "./home/home";
import Modal from './modal/modal'

const App = () => (
    <div className='mainApp'>
        <Modal />
        {/* <h1>Bestfriend Treehouse</h1> */}
        <Navbar/>

        <Switch>
            <Route exact path="/" component={Home} />
            {/* <AuthRoute path="/signup" component={signupform_container} />
            <AuthRoute path="/login" component={loginform_container} /> */}
        </Switch>
        
    </div>
);

export default App;