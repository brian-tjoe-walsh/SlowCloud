import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';
import { addSong, playSong, pauseSong, deleteSong } from '../../actions/mediaPlayer_actions';


const mapStateToProps = (state, ownProps) => {
  return({
  state: state,
  artist: {},
  album: {},
  albumId: ownProps.match.params.albumId
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  addSong: (song) => dispatch(addSong(song)),
  deleteSong: (song) => dispatch(deleteSong(song)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);