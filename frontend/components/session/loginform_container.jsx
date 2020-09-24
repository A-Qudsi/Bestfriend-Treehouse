import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Session from './session';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    };
};

const mDTP = dispatch => {
    return {
        session: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Session);
