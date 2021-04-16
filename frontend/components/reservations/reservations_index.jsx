import React from 'react';
import ReservationIndexItem from './reservations_index_item.js';

class ReservationsIndex extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
      this.props.fetchReservations(this.props.currentUser.id)
  }

  render() {
    debugger
    return(
      
        <ul className='reservations-container'>
          { this.props.reservations.map( (reservation) => 
          <li key={reservation.id} className="reservation-item">
            <ReservationIndexItem 
                reservation = {reservation} />
            </li>)
          }
        </ul>
    )
  }
  
}

export default ReservationsIndex;