import reservationIndex from './reservations_index';
import { connect } from 'react-redux';
import { fetchReservations, destroyReservation, createReservation } from '../../actions/reservation_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        reservations: Object.values(state.entities.reservations),
        spots: state.entities.spots,
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = dispatch => {
    return {
        fetchReservations: (userId) => dispatch(fetchReservations(userId)),
        destroyReservation: (reservationId) => dispatch(destroyReservation(reservationId))
    }
}

export default connect(msp, mdp)(reservationIndex);