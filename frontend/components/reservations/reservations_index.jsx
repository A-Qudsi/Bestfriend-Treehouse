import React, { Fragment } from "react";
import ReservationIndexItem from "./reservations_index_item.js";

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations(this.props.currentUser.id);
    this.props.fetchSpots();
  }

  render() {
    if (this.props.reservations.length === 0)
      return (
        <div className="noReservations-container">
          <p className="noReservations">You have no reservations!</p>
        </div>
      );
    return (
      <Fragment>
        <div className="reservationsHeader">
          <p className="yesReservations">
            Here are a list of your reservations!
          </p>
        </div>
        <ul className="reservations-container">
          {this.props.reservations.reverse().map((reservation) => (
            <li key={reservation.id} className="reservation-item">
              <ReservationIndexItem
                reservation={reservation}
                spot={this.props.spots}
                destroyReservation={this.props.destroyReservation}
                currentUser={this.props.currentUser}
                fetchReservations={this.props.fetchReservations}
              />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default ReservationsIndex;
