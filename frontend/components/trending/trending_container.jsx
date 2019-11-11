import { connect } from 'react-redux';
import Trending from './trending';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  max: ownProps.max
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);