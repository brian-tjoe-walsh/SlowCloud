import { connect } from 'react-redux';
import Discover from './discover';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAlbums:  () => dispatch(fetchAlbums()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);