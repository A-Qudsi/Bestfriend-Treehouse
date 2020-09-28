import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT,
    REMOVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            newState[action.spot.id] = action.spot
            return newState
        case REMOVE_SPOT: 
            delete newSpot[action.spotId]
            return newState
        default:
            return state;
    }
};

export default spotsReducer