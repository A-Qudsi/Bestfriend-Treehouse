import React from 'react';
import { Link } from 'react-router-dom';

class ReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const spot = this.props.spot[this.props.reservation.spot_id];
        debugger
        return (
            <div className="reservation-index-item">
                <div className='reservation-index-item-image'>
                    <img src={spot.photoUrls[1]} />
                </div>
                <div className="reservation-index-item-info">
                    
                </div>
            </div>
        )
    }
}

export default ReservationIndexItem