import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import Signup from './signup'

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(null, mDTP)(Signup);
