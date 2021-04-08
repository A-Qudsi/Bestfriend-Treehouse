import React from 'react';
import Pictures from './spot_show_pictures';
import ReservationForm from '../reservations/reservation_form';
import SpotBody from './spot_body';

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        if (!this.props.spot)  return null;
        debugger
        const { spot } = this.props;
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
                            <i className="fas fa-upload"></i> Share
                            <i className="far fa-heart"></i> Save
                        </div>
                    </div>
                </div>
                <Pictures spot={spot} />
                <div className='spotsShowBodyContainer'>
                        <SpotBody spot={spot} />
                    <div className='spotsShowRightSide'>
                        <ReservationForm spot={spot}/>
                    </div>
                </div>
            </div>
        );
    };
};
export default SpotShow;
