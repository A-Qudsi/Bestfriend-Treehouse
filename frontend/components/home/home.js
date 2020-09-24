import React from 'react';
import LoginContainer from '../login/login_container.js';

const Home =() => {
    return (
        <div className = 'homePage'>

            <div className='treehouse_background'>
                <LoginContainer />
            </div>
        </div>
    )
}

export default Home;