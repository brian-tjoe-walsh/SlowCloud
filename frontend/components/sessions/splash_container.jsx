import { connect } from 'react-redux';
import Splash  from './splash';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);