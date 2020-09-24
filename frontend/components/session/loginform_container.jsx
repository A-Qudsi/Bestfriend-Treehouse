import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Session from './session';

const mSTP = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    };
};

const mDTP = dispatch => {
    return {
        session: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(Session);
