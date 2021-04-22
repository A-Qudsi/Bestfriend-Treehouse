import React from 'react';

class ReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleSubmit() {
        this.props.destroyReservation(this.props.reservation.id)
            .then(() => this.props.fetchReservations(this.props.currentUser.id));
    }

    render() {
        
        if (Object.values(this.props.spot).length === 0) return null;
        const {start_date, end_date, number_guests} = this.props.reservation
        const spot = this.props.spot[this.props.reservation.spot_id];
        
        return (
            <div className="reservation-index-item">
                <div className='reservation-index-item-image'>
                    <img src={spot.photoUrls[1]} />
                </div>
                <div className="reservation-index-item-info">
                    <p className='Reservation-title'>{spot.name}</p>
                    <p>Reservation Confirmed</p>
                    <div className='reservation-dates'>
                        <div>Start Date:</div>
                        <div>{start_date}</div>
                    </div>
                    <div className='reservation-dates'>
                        <div>End Date:</div>
                        <div>{end_date}</div>
                    </div>
                    <div className='reservation-dates'>
                        <div>Number of Guests:</div>
                        <div>{number_guests}</div>
                    </div>
                </div>
                <div className='cancel-reservation-div'>
                    <button className='submit-button' onClick={this.handleSubmit}>Cancel Reservation</button>
                </div>
            </div>
        )
    }
}

export default ReservationIndexItem