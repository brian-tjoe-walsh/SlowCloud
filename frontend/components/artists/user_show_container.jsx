import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbums } from '../../actions/album_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  artistId: ownProps.match.params.artistId,
  albums: {}
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);