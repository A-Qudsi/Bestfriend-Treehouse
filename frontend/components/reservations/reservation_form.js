import React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import Dropdown from "./reservation_dropdown";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      startDate: null,
      endDate: null,
      totalGuests: 1,
    };

    this.bookReservation = this.bookReservation.bind(this);
    this.totalNumberGuests = this.totalNumberGuests.bind(this);
  }

  totalNumberGuests(number) {
    this.setState({
      totalGuests: number,
    });
  }

  bookReservation(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props
        .createReservation({
          start_date: this.state.startDate.format("YYYY-MM-DD"),
          end_date: this.state.endDate.format("YYYY-MM-DD"),
          number_guests: this.state.totalGuests,
          spot_id: this.props.spot.id,
          guest_id: this.props.currentUser.id,
        })
        .then(() =>
          this.props.history.push(
            `/users/${this.props.currentUser.id}/reservations`
          )
        );
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    const { spot } = this.props;
    const totalCounter = this.state.counter + this.state.childrenCounter;
    return (
      <div className="bookingcontainer">
        <div className="bookingHeader">
          <div className="l_e">$ {spot.price} / night</div>
          <div className="bookingRating">
            {spot.average_rating} <i class="fas yellow fa-star"></i>
          </div>
        </div>
        <div>
          <div className="signup_form body">
            <div>
              <div className="sReservation">
                <DateRangePicker
                  block={true}
                  startDate={this.state.startDate}
                  startDateId="mm/dd/yyyy"
                  endDate={this.state.endDate}
                  endDateId="mm/dd/yyyy"
                  noBorder={false}
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  }
                  numberOfMonths={1}
                  hideKeyboardShortcutsPanel={true}
                  startDatePlaceholderText="Check-in"
                  endDatePlaceholderText="Checkout"
                  block={true}
                />
              </div>
              <Dropdown
                spot={spot}
                totalGuests={this.totalNumberGuests}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                // totalCostPrice={this.props.totalCostPrice}
              />
              <button
                className="submit-button"
                onClick={(e) => this.bookReservation(e)}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationForm;
