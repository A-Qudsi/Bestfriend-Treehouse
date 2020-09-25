import React from 'react';
import LoginContainer from '../login/login_container.js';
// import Navbar from '../navbar/navbar'

class Splash extends React.Component {

    render(){
        return (
            <div className = 'homePage'>

                <div className='treehouse_background'> 
                    <LoginContainer />
                </div>

            </div>
        )
    }
}

export default Splash;