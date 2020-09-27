import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

const Login = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="login-signup" >
            <button className='loginContainerButton' onClick= { () => (openModal('login'))}>Log in</button>
            <button className='loginContainerButton' onClick= { () => (openModal('signup'))}>Sign up</button>
        </div>
    );

    const personalLogin = () => (
        <div className="header-div">
            <button className='loginContainerButton' onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalLogin() : sessionLinks();
};

export default Login;
