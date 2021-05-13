import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Login from "./login";
import { openModal } from "../../actions/modal_actions";
import modal from "../modal/modal";

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Login);
