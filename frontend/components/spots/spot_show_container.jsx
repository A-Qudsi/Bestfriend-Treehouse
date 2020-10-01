import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show.js';

const mSTP = (state, ownProps) => {
    // debugger
    return {spot: state.entities.spots[ownProps.match.params.spotId]};
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect( mSTP, mDTP )(SpotShow);
