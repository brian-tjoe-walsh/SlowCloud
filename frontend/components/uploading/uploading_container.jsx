import { connect } from 'react-redux';
import Uploading from './uploading';
import { createSong } from '../../actions/song_actions';


const mapStateToProps = (state) => ({
  song: {},
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  createSong: (song) => dispatch(createSong(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Uploading);