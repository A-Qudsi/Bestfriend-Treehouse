import { connect } from "react-redux";
import { fetchSpot, fetchSpots } from "../../actions/spot_actions";
import SpotShow from "./spot_show.js";
import { createReservation } from "../../actions/reservation_actions";
import { openModal } from "../../actions/modal_actions";
import { createReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    spot: state.entities.spots[ownProps.match.params.spotId],
    spotId: ownProps.match.params.spotId,
  };
};

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  createReview: (review) => dispatch(createReview(review)),
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (id) => dispatch(fetchSpot(id)),
  createReservation: (reservation) => dispatch(createReservation(reservation)),
});

export default connect(mSTP, mDTP)(SpotShow);
