import reservationIndex from './reservation_index';
import { connect } from 'react-redux';
import { fetchReservations, destroyReservation } from '../../actions/reservation_actions';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
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