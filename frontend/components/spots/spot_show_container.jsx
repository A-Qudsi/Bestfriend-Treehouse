import { connect } from "react-redux";
import { fetchSpot, fetchSpots } from "../../actions/spot_actions";
import SpotShow from "./spot_show";
import { createReservation } from "../../actions/reservation_actions";
import { openModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    spot: state.entities.spots[ownProps.match.params.spotId],
    spotId: ownProps.match.params.spotId,
  };
};

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (id) => dispatch(fetchSpot(id)),
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  fetchReviews: (userId) => dispatch(fetchReviews(userId)),
});

export default connect(mSTP, mDTP)(SpotShow);
