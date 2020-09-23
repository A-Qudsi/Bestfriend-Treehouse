import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import Signup from './signup'

const mSTP = (state) => ({
    session: {
        fname: '',
        lname: '',
        date_of_birth: '',
        email: '',
        password: '',
    },
    formType: 'signup'
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Signup);
