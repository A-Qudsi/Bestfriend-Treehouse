import React from 'react';

class SpotShow extends React.Component {
    // constructor 
    // componentDidMount() {
    //     this.props.fetchSpot(this.props.match.params.spotId);
    // }

    render() {
        debugger
        if (!this.props.spot)  return null;
        debugger
        const { spot } = this.props;
        console.log(spot);
        return (
            <div className='showpagediv'>
                <div className='showpageheader'>                 
                    <h1 className='showpagename'>{spot.name}</h1>
                </div>
                <div className='address'>
                    <div className='addressleft'> 
                        <i className="fas fa-star"></i><span>5 {spot.address} {spot.city}</span>
                    </div>
                    <div className='addressright'>
                        <div className='faviconsright'>
                            <i className="fas fa-upload"></i>Share
                            <i className="far fa-heart"></i>Save
                        </div>
                    </div>
                </div>

                <div className='photo_grid'>
                    <div className="photo_1" >
                        <img src={spot.photoUrls[2]} className='photo_1' />
                    </div>
                    <div className='photo_2'>
                        <img src={spot.photoUrls[3]} className='photo_2' />
                    </div>
                    <div className='photo_3'>
                        <img src={spot.photoUrls[4]} className='photo_3' />
                    </div>
                    <div className='photo_4'>
                        <img src={spot.photoUrls[5]} className='photo_4' />
                    </div>
                    <div className='photo_5'>
                        <img src={spot.photoUrls[6]} className='photo_5' />
                    </div>
                </div>

                <div className ='spotshowbody'>
                    <span>Entire house hosted by {spot.host_id}</span>
                    <p>{spot.maxGuests} Guests</p>
                </div>
                <div className='entirehome'>
                    <div className='homeIcon'>
                        <i className="fas fa-home" id='sicons'></i>
                    </div>
                    <div className='homeinfo'>
                        <p className='sTitle'>Entire home</p>
                        <p className='sBody'>You’ll have the house to yourself.</p>
                    </div>
                </div>
                <div className='enhancedclean'>
                    <div className='enhancedcleanIcon'>
                        <i className="far fa-gem" id='sicons'></i>
                    </div>
                    <div className='enhancedcleaninfo'>
                        <p className='sTitle'>Enhanced Clean</p>
                        <p className='sBody'>This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts. <span className='learnmore'>Learn more</span></p>
                    </div>
                </div>
                <div className='checkin'>
                    <div className='checkinicon'>
                        <i className="fas fa-key" id='sicons'></i>
                    </div>
                    <div className='checkininfo'>
                        <p className='sTitle'>Great check-in experience</p>
                        <p className='sBody'>100% of recent guests gave the check-in process a 5-star rating.</p>
                    </div>
                </div>
                <div className='cancelation'>
                    <div className='cancelationicon'>
                        <i className="far fa-calendar-check" id='sicons'></i>   
                    </div>
                    <div className='cancelationinfo'>
                        <p className='sTitle'>Cancellation policy</p>
                        <p className='sBody'>Add your trip dates to get the cancellation details for this stay.</p> 
                    </div>  
                </div>
            </div>
        );
    };
};
export default SpotShow;
