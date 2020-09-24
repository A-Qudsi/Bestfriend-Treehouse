import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

const Login = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="login-signup">
            <button onClick = { () => (openModal('login')) }>login</button>
            <button onClick={() => (openModal('signup'))} >signup</button>
        </div>
    );

    const personalLogin = () => (
        <div className="header-div">
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalLogin() : sessionLinks();
};

export default Login;
