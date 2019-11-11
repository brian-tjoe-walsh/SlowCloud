import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => ({
  state: state,
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  currentUser: state.entities.users[state.session.id],
  albumId: ownProps.match.params.albumId
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);