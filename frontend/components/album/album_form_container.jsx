import React from 'react';
import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createAlbum } from '../../actions/album_actions';
import { createNewAlbum } from '../../actions/album_actions';


const mapStateToProps = (state) => {
  return(
    {
    errors: Object.values(state.errors),
    currentUserId: state.session.id
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  createAlbum: album => dispatch(createAlbum(album)),
  closeModal: () => dispatch(closeModal()),
  createNewAlbum: (album) => dispatch(createNewAlbum(album)),
  openModal: () => dispatch(openModal('create_album'))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(AlbumForm);