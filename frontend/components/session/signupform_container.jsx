import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import Session from './session'
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    curUser: Boolean(state.session.id)
});

const mDTP = dispatch => ({
    session: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Log in
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Session);
