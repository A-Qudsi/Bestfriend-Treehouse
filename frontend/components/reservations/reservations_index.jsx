import React from 'react';

class ReservationsIndex extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
      this.props.createReservation(this.props.reservation).then(() => {
          this.props.fetchReservations()
      })
  }

  render() {
    debugger
    return(
        <h3>Available</h3>
    )
  }
  
}

export default ReservationsIndex;