import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import RandomAlbums from './random_albums';

const mapStateToProps = (state, ownProps) => ({
  users: Object.values(state.entities.users),
  albums: Object.values(state.entities.albums),
  currentUser: state.entities.users[state.session.id],
  filter: ownProps.filter,
  max: ownProps.max
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomAlbums);