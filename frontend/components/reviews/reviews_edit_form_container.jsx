import EditReviewForm from "./reviews_edit";
import { connect } from "react-redux";
import { updateReview, fetchReviews } from "../../actions/review_actions";
import { fetchSpots } from "../../actions/spot_actions";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    spot: ownProps.spot,
    review: ownProps.review,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    updateReview: (review) => dispatch(updateReview(review)),
    fetchReviews: (userId) => dispatch(fetchReviews(userId)),
  };
};

export default connect(mSTP, mDTP)(EditReviewForm);
