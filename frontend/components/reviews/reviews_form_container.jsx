import ReviewForm from "./reviews_form";
import { connect } from "react-redux";
import {
  fetchReviews,
  deleteReview,
  updateReview,
} from "../../actions/review_actions";
import { createReview } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    debugger
  return {
    currentUser: state.entities.users[state.session.id],
    spot: ownProps.spot,
    reviews: ownProps.spot.review_ids
      .map((review_id) => state.entities.reviews[review_id])
      .filter((review) => review),
    formType: "create",
  };
};

const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchReviews: (userId) => dispatch(fetchReviews(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mSTP, mDTP)(ReviewForm);
