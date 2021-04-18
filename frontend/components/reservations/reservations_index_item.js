import React from 'react';
import { Link } from 'react-router-dom';

class ReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        debugger
        const spot = this.props.spot[this.props.reservation.spot_id];
        return (
       <div className="spot-index-item">
            <div className='index-item-image'>
                <img src={spot.photoUrls[1]} />
            </div>
            <div className="index-item-info">
                <p className="index-item-name">{name}</p>
                <p className="index-item-description">{description}</p>
                <div className='line'></div>
                <span className="index-item-details">{maxGuests} · guests </span>
            </div>
            <div className='price'>$ {price} / night </div>
        </div>
        )
    }
}

export default ReservationIndexItem