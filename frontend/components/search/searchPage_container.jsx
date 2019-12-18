import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import SearchPage from './searchPage';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
  currentUserId: state.session.id,
  artistId: ownProps.match.params.artistId,
  albums: {},
  user: {}
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);