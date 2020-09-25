import { connect } from 'react-redux';
import Session from './session';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors, login } from '../../actions/session_actions';

import React from 'react';

const mSTP = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        curUser: Boolean(state.session.id)
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
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
        
    };
};

export default connect(mSTP, mDTP)(Session);
