import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';


function SignupButton(props) {
  let user = props.currentUser || {};

  if (Object.keys(user).length !== 0) {
    return (null);
  } else {
    return (
      <div className={props.background} onClick={props.signup}>Signup</div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: () => dispatch(openModal('signup'))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupButton);