import ReviewsIndex from "./reviews_index";
import { connect } from "react-redux";
import {
  fetchReviews,
  deleteReview,
  updateReview,
} from "../../actions/review_actions";
import { fetchSpots } from "../../actions/spot_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    spot: ownProps.spot,
    reviews: ownProps.spot.review_ids
      .map((review_id) => state.entities.reviews[review_id])
      .filter((review) => review),
  };
};

const mDTP = (dispatch) => {  
  return {
    fetchReviews: (userId) => dispatch(fetchReviews(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review)),
    fetchSpots: () => dispatch(fetchSpots()),
  };
};

export default connect(mSTP, mDTP)(ReviewsIndex);
