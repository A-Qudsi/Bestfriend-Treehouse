import React from 'react';

const Navbar = () => {
    return (
        <div className='nav_bar'>
            <img className='treehouse_logo' src='https://bestfriend-treehouse-dev.s3.amazonaws.com/treehouse-in-large-tree.jpg'/>
            <div className='search_bar'>
                <input type='text' placeholder="Start your search"/> <i className="fas fa-search fa-fw"></i>
            </div>
            <div className='right_panel'>
                <p className='host_text'>Become a host    </p>
                <button className='right_panel_buttons'><div className='globe_panel_button'>
                    <i className="fas fa-globe fa-fw"></i>
                    <i className="fas fa-chevron-down fa-fw"></i>
                    </div></button>
                <button className='right_panel_buttons'> <div className='right_header_button'>
                    <i className="fas fa-grip-lines fa-fw"></i>   
                    <i className="fas fa-user-circle fa-fw"></i>
                </div></button>
            </div>
        </div>
    )
}

export default Navbar;