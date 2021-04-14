import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
import Dropdown from './reservation_dropdown';

class ReservationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            startDate: null,
            endDaate: null,
        };

        this.bookReservation = this.bookReservation.bind(this);
    }

    bookReservation(e) {
        e.preventDefault();
        debugger;
        if (this.props.currentUser) {
            this.props.createBooking({
                start_date: this.state.startDate.format('YYYY-MM-DD'),
                end_date: this.state.endDate.format('YYYY-MM-DD'),
                number_guests: totalCounter,
                spot_id: this.props.spotId,
                guest_id: this.props.currentUser.id
                
            }).then(() => this.props.history.push(`users/${this.props.currentUser.id}/reservations`));
        } else {
            this.props.openModal('login');
        }
    }

    render() {
        const { spot } = this.props;
        const totalCounter = this.state.counter + this.state.childrenCounter;
        return (
            <div className='bookingcontainer'>
                <div className='bookingHeader'>
                    <div className='l_e'>
                        $ {spot.price} / night
                    </div>
                    <div className='bookingRating'>
                        5.0
                    </div>
                </div>
                <div>
                    <form className='signup_form body'>
                        <div>
                            <div className='sReservation' >
                                <DateRangePicker
                                    block={true}
                                    startDate={this.state.startDate}
                                    startDateId="mm/dd/yyyy"
                                    endDate={this.state.endDate}
                                    endDateId="mm/dd/yyyy"
                                    noBorder={false}
                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                    focusedInput={this.state.focusedInput}
                                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                                    numberOfMonths={1}
                                    hideKeyboardShortcutsPanel={true}
                                    startDatePlaceholderText="Check-in"
                                    endDatePlaceholderText="Checkout"
                                    block={true}
                                />
                            </div>
                            <Dropdown spot={spot} />
                            <button className='submit-button' onClick={(e) => this.bookReservation(e)
                            }>Reserve</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default ReservationForm;
