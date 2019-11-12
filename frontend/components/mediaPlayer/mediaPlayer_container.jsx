import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import MediaPlayer from './mediaPlayer';


const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);