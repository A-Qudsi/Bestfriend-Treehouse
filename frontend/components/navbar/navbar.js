import React from 'react';
// import { openModal } from '../../actions/modal_actions';
import LoginContainer from '../login/login_container.js';
import { Link } from 'react-router-dom';
// import Splash from '../splash//splash';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    closeDropdown() {
        this.setState({ clicked: false }, () => {
            document.removeEventListener('click', this.closeDropdown);
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ clicked: true, }, () => {
            document.addEventListener("click", this.closeDropdown);
        })
    }

    render() {
        return (
        <div className='nav_bar'>
            <div className='BFTHLogo'>
            <Link to="/"><img className='treehouse_logo' src='https://bestfriend-treehouse-seeds.s3.amazonaws.com/f39e3999c24445afb5a328b6c5a2f040.png' /></Link>
            <p>BestFriend TreeHouse</p>
            </div>

            <div className='search_bar'>
                <input type='text' placeholder="Start your search"/> <i className="fas fa-search fa-fw"></i>
            </div>

            <div className='right_panel'>
                <p className='host_text'>Become a host</p>
                <div className='right_panel_buttons'>
                    <div className='globe_panel_button'>
                        <i className="fas fa-globe fa-fw"></i>
                        <i className="fas fa-chevron-down fa-fw"></i>
                    </div>
                </div>
                <div className='dropdown' >
                    <button className='right_panel_buttons'onClick={this.handleClick} > 
                        <div className='right_header_button' >
                            <i className="fas fa-bars fa-fw" id="navbar"></i>   
                            <i className="fas fa-user-circle fa-fw"></i> 
                            {this.state.clicked ? (
                                <ul onClick={e => e.stopPropagation()} id='navbar-dropdown'>
                                        <LoginContainer />
                                </ul>
                            ) : null}
                        </div>  
                    </button>
                </div>
            </div>
        </div>
    )
    }
}

export default Navbar;