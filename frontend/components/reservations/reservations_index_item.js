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
            <div className="spot-index-item">
                <div className='index-item-image'>
                    <img src={spot.photoUrls[1]} />
                </div>
                <div className="index-item-info">
                    <p className="index-item-name">{spot.name}</p>
                    <p className="index-item-description">{spot.description}</p>
                    <div className='line'></div>
                    <span className="index-item-details">{spot.maxGuests} · guests </span>
                </div>
                <div className='price'>$ {spot.price} / night </div>
            </div>
        )
    }
}

export default ReservationIndexItem