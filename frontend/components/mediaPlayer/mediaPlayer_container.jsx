import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchSong, fetchSongs } from '../../actions/song_actions';
import {playSong, pauseSong } from '../../actions/mediaPlayer_actions';
import MediaPlayer from './mediaPlayer';


const mapStateToProps = (state) => ({
  state: state,
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  song: null,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);