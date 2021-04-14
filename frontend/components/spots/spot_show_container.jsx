import { connect } from 'react-redux';
import { fetchSpot, fetchSpots } from '../../actions/spot_actions';
import SpotShow from './spot_show.js';
import { createReservation } from '../../actions/reservation_actions';


const mSTP = (state, ownProps) => {  
        return {
        currentUser: state.entities.users[state.session.id],
        spot: state.entities.spots[ownProps.match.params.spotId],
        spotId: ownProps.match.params.spotId
    }   
};

const mDTP = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: id => dispatch(fetchSpot(id)),
    createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect( mSTP, mDTP )(SpotShow);
