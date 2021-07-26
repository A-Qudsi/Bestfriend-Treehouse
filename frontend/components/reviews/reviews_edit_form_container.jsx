import ReviewForm from "./reviews_form";
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";

const mSTP = (ownProps) => {
  debugger;
  return {
    review: ownProps.review,
    spot: ownProps.entities.spot,
    formType: "edit",
  };
};

const mDTP = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mSTP, mDTP)(ReviewForm);
