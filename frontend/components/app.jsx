import React from "react";
import Loginform_container from './session/loginform_container'
import Signupform_container from "./session/signupform_container";
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from "./splash/splash";
import Modal from './modal/modal';
import Footer from './footer/footer';
import SpotsPage from './spots/spots_index_container';
import SpotShowContainer from './spots/spot_show_container';


const App = () => (
    <div className='mainApp'>
        <header className='app-header'><Navbar /></header> 
        <Modal />
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/spots" component={SpotsPage} />
            <Route path="/spots/:spotId" component={SpotShowContainer} />
            {/* <AuthRoute path="/signup" component={Signupform_container} />
            <AuthRoute path="/login" component={Loginform_container} /> */}
        </Switch>
        <footer><Footer /></footer>

    </div>
);

export default App;