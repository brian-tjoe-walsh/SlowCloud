import React from 'react';
import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateAlbum from '../../actions/album_actions';


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
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(AlbumForm);