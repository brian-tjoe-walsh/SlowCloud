import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchSong, fetchSongs } from '../../actions/song_actions';
import MediaPlayer from './mediaPlayer';


const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  song: null,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchSongs: (id) => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);