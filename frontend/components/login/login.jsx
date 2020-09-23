import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <div className="login-signup">
            <Link to="/login">Log in</Link>
            <br />
            <Link to="/signup">Sign up</Link>
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
