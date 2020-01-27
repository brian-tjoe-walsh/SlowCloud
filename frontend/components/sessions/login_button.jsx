import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function LoginButton(props) {
  let user = props.currentUser || {};
  
  if (Object.keys(user).length !== 0) {
    return (
      <div className={props.background} onClick={props.logout}>Logout</div>
    )
  } else {
    return (
      <div className={props.background} onClick={props.login}>Login</div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(openModal('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);