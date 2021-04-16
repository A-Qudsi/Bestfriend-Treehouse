import reservationIndex from './reservations_index';
import { connect } from 'react-redux';
import { fetchReservations, destroyReservation } from '../../actions/reservation_actions';

const msp = (state) => {
    debugger
    return {
        reservations: Object.values(state.entities.reservations),
        spots: state.entities.reservations,
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