import ReviewForm from "./reviews_form";
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    spot: ownProps.spot,
    review: ownProps.review,
    formType: "edit",
  };
};

const mDTP = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
    fetchReviews: (userId) => dispatch(fetchReviews(userId)),
  };
};

export default connect(mSTP, mDTP)(ReviewForm);
