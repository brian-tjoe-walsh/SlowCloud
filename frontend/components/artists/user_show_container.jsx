import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import UserShow from './user_show';
import { addSong, playSong, pauseSong, deleteSong } from '../../actions/mediaPlayer_actions';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  state: state,
  artistId: ownProps.match.params.artistId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  addSong: (song) => dispatch(addSong(song)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  deleteSong: () => dispatch(deleteSong()),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);