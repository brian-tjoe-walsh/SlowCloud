import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return({
  state: state,
  artist: {},
  album: {},
  albumId: ownProps.match.params.albumId
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);