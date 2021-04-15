import React from 'react';

class ReservationsIndex extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
        this.props.fetchReservations()
  }

  render() {

    return(
        <h3>Available</h3>
    )
  }
  
}

export default ReservationsIndex;