import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  errors: Object.values(state.errors),
  formType: "signup"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user)),
  otherForm: (
    <span className="btn" onClick={() => dispatch(openModal('login'))}>
      Click To Login
      </span>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignupForm);