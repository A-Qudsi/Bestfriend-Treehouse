import React from 'react';
import { Link } from 'react-router-dom';

// import { openModal } from '../../actions/modal_actions';

const Login = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="login-signup" >
            <li className='loginContainerButton' onClick= { () => (openModal('login'))}>Log in</li>
            <li className='loginContainerButton' onClick= { () => (openModal('signup'))}>Sign up</li>
        </div>
    );

    const personalLogin = () => (
        <div className="header-div">
            <li className='loginContainerButton' onClick={logout}><Link to={`/users/${currentUser.id}/reservations`}>Check Reservations</Link></li>
            <li className='loginContainerButton' onClick={logout}>Log Out</li>
        </div>
    );

    return currentUser ? personalLogin() : sessionLinks();
};

export default Login;
