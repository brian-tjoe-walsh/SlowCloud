import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../sessions/login_form_container';
import SignupFormContainer from '../sessions/signup_form_container';
import AlbumFormContainer from '../album/album_form_container';
import Loading from '../uploading/loading';
import AlbumLoading from '../uploading/album_loading';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case ('album'):
      component = <AlbumFormContainer />;
      break;
    case ('uploading'):
      component = <Loading />;
      break;
    case ('create_album'):
      component = <AlbumLoading />;
      break;
    default:
      return null;
  }

  debugger
  if (modal === 'uploading' || modal === 'create_album') {
    return(
      <div className="loader-page" >
          {component}
      </div>
    );
  } else {
    return (
      <div className="preModal" onClick={closeModal}>
        <div onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);