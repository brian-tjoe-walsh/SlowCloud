import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import Albums from './albums';
import { addSong, playSong, pauseSong, deleteSong } from '../../actions/mediaPlayer_actions';


const mapStateToProps = (state, ownProps) => ({
  state: state,
  albums: {},
  category: ownProps.category,
  max: ownProps.max
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  addSong: (song) => dispatch(addSong(song)),
  deleteSong: (song) => dispatch(deleteSong(song)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);