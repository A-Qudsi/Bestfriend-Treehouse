import { connect } from 'react-redux';

import { fetchBench } from '../../actions/spot_actions';
import SpotShow from './spot_show.js';

const mSTP = (state, { match }) => {
    const spotId = parseInt(match.params.spotId);
    // const bench = selectBench(state.entities, benchId);
    return {
        spotId,
    };
};

const mDTP = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect( mSTP, mDTP )(SpotShow);
