import React from 'react';
import { Link } from 'react-router-dom';

class ReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const reservationId = this.props.reservation.id;
        const { name, description, maxGuests, price } = this.props.spot;
        return (
            <Link to={`/spots/${spotId}`} key={spotId}>
                <div className="spot-index-item">
                    <div className='index-item-image'>
                        <img src={this.props.spot.photoUrls[1]} />
                    </div>
                    <div className="index-item-info">
                        <p className="index-item-name">{name}</p>
                        <p className="index-item-description">{description}</p>
                        <div className='line'></div>
                        <span className="index-item-details">{maxGuests} · guests </span>
                    </div>
                    <div className='price'>$ {price} / night </div>
                </div>
            </Link >
        );
    }
}

export default ReservationIndexItem