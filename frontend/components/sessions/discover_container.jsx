import { connect } from 'react-redux';
import Discover from './discover';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  state: state,
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAlbums:  () => dispatch(fetchAlbums()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);