import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show.js';
import { createReservation } from '../../actions/reservation_actions';


const mSTP = (state, ownProps) => ({
        currentUser: state.entities.users[state.session.id],
        spot: state.entities.spots[ownProps.match.params.spotId]
});

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect( mSTP, mDTP )(SpotShow);
