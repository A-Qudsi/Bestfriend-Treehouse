import React from 'react';
import Escapes from '../escapes/escapes'

class Splash extends React.Component {

    render(){
        return (
            <div>
                <div className = 'homePage'>
                    <div className='treehouse_background'> 
                        <div className='goNear'>
                            <p className='goNearTitle'>Go Near</p>
                            <p className='goNearBody'>Settle in somewhere new. Discover stays to live, work, or just relax.</p>
                            <button className='goNearButton'>Explore nearby</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className ='escape_images'>
                        <li className="escape_img">
                            <img src='https://bestfriend-treehouse-dev.s3.amazonaws.com/dome.jpg' className='eimg1' />
                            <div className='eimg_details'>
                                <p className='img_title'>Unique Stays</p>
                                <p className='img_body'>Spaces that are more than just a place to sleep.</p>
                            </div>
                        </li>
                        <li className="escape_img">
                            <img src='https://bestfriend-treehouse-dev.s3.amazonaws.com/woman.jpg' className='eimg2' />
                            <div className='eimg_details'> 
                                <p className='img_title'>Online Experiences</p>
                                <p className='img_body'>A new way to travel from home.</p>
                            </div>
                        </li>
                        <li className="escape_img">
                            <img src='https://bestfriend-treehouse-dev.s3.amazonaws.com/house.jpg' className='eimg3' />
                            <div className='eimg_details'>
                                <p className='img_title'>Entire Homes</p>
                                <p className='img_body'>Comfortable private places, with room for friends or family.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <Escapes />
                </div>
                <div className='disclaimer'>
                    <div className='disclaimer_lf'>
                        <div className='disclaimer_textlf'>
                            <p>We embrace a world where everyone belongs, and stand with #BlackLivesMatter.</p>
                            <button className='learnMore'>Learn More</button>
                        </div>
                    </div>
                    <div className='disclaimer_rf'>
                        <div className='disclaimer_textrf'>
                            <p>We reject racism or bigotry of any kind. But now is a time for action rather than words. So we’d like to share with you, Project Lighthouse, a groundbreaking initiative launching in the United States to uncover, measure, and overcome discrimination when booking or hosting on Bestfriend Treehouse.                        
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;