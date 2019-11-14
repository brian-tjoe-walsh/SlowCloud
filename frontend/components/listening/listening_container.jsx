import { connect } from 'react-redux';
import Listening from './listening';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  albums: ownProps.albums
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listening);