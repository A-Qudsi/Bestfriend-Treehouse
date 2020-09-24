import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import Session from './session'


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = dispatch => ({
    session: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Session);
