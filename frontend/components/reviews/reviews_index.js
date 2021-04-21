import React from 'react';
import ReservationIndexItem from './reservations_index_item.js';

class ReservationsIndex extends React.Component {
  constructor(props) {
      super(props);
  }

    componentDidMount(){
      this.props.fetchReviews(this.props.currentUser.id);
    }

  render() {
    return(
        <h3>Testing</h3>
    )
  }
  
}

export default ReservationsIndex;