import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT,
  REMOVE_SPOT,
} from "../actions/spot_actions";

import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      newState[action.spot.id] = action.spot;
      return newState;
    case REMOVE_SPOT:
      delete newState[action.spotId];
      return newState;
    case RECEIVE_REVIEW:
      if (!action.isUpdated) {
        newState[action.review.spot_id].review_ids.push(action.review.id);
      }
      return newState;
    case REMOVE_REVIEW:
      const spot = newState[action.review.spot_id];
      spot.reviews = spot.review_ids.filter(
        (review) => review !== action.review.id
      );
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
