import React from 'react';
import LoginContainer from '../login/login_container.js';
// import Navbar from '../navbar/navbar'

const Home =() => {
    return (
        <div className = 'homePage'>
            {/* <Navbar /> */}

            <div className='treehouse_background'>
                <LoginContainer />
            </div>
        </div>
    )
}

export default Home;