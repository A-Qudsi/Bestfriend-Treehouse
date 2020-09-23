import React from "react";
import LoginContainer from './login/login_container'
import signup_container from "./session/signup_container";
import { Route, Switch } from 'react-router-dom';


const App = () => (
    <div>
        <h1>Bestfriend Treehouse</h1>
        <LoginContainer />
        <Switch>
            <Route path="/signup" component={signup_container} />
            {/* <Route path="/login" component={EditReportFormContainer} /> */}
        </Switch>
        
    </div>
);

export default App;