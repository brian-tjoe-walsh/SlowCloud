import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  errors: Object.values(state.errors),
  formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <span className="btn" onClick={() => dispatch(openModal('signup'))}>
      Click To Create An Account
    </span>
  ),
  closeModal: () => dispatch(closeModal()),
  processDemo: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(LoginForm);