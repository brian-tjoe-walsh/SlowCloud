import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumsIndex from './albums_index';

const mapStateToProps = (state) => ({
  albums: {}
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);