import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import UsersIndex from './users_index';

const mapStateToProps = (state) => ({
  users: {},
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);