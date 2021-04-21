import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return newState[action.review.id] = action.review
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;