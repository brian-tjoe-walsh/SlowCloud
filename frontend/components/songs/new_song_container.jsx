import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  errors: Object.values(state.errors),
  formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <span className="btn" onClick={() => dispatch(openModal('signup'))}>
      Signup
      </span>
  ),
  closeModal: () => dispatch(closeModal()),
  processDemo: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);