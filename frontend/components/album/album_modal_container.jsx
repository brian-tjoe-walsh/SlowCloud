import React from 'react';
// import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function AlbumModal(props) {
  let user = props.currentUserId;

  if (user) {
    return (
      <div className="create-album-button" onClick={props.albumModal}>Create A New Album</div>
    )
  } else {
    return (
      <div className="create-album-button" onClick={props.login}>Create A New Album</div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = (dispatch) => {
  return (
    {
    albumModal: () => dispatch(openModal(`album`)),
    login: () => dispatch(openModal('login'))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumModal);