import ReviewForm from "./reviews_form";
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    review: ownProps.review,
    formType: "edit",
  };
};

const mDTP = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mSTP, mDTP)(ReviewForm);
