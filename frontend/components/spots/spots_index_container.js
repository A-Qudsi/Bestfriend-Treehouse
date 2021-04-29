import { connect } from 'react-redux';
import { updateFilter } from "../../actions/filter_actions";
import SpotsIndex from './spots_index';
import { fetchSpots } from '../../actions/spot_actions';

const mSTP = state => {
    return {
        spots: Object.values(state.entities.spots)
    }
};

const mDTP = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    // createSpot: spot => dispatch(createSpot(spot)),
    // updateSpot: spot => dispatch(updateSpot(spot)),
    // deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(SpotsIndex);