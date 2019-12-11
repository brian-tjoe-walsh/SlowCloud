import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import Albums from './albums';
import { addSong } from '../../actions/mediaPlayer_actions';


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
  addSong: (song) => dispatch(addSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);