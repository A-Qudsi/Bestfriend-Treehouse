import ReviewsIndex from "./reviews_index";
import { connect } from "react-redux";
import { fetchReviews, deleteReview } from "../../actions/review_actions";

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
  };
};

export default connect(mSTP, mDTP)(ReviewsIndex);
