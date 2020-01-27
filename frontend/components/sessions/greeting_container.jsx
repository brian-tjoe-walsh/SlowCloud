import { connect } from 'react-redux';
import Greeting  from './greeting';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(openModal('login')),
  signup: () => dispatch(openModal('signup'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);