import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import SearchPage from './searchPage';

const mapStateToProps = (state, ownProps) => {
  return({
  history: ownProps.history,
  currentUserId: state.session.id,
  state: state,
  search: ownProps.history.location.search.split("=")[1]
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);