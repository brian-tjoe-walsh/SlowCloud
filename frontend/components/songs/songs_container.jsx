import {connect} from 'react-redux';
import Songs from './songs';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  songs: Object.values(state.entities.songs),
  currentUser: state.entities.users[state.session.id],
  filter: ownProps.filter,
  max: ownProps.max
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Songs);