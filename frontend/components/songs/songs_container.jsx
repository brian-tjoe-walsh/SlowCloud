import {connect} from 'react-redux';
import Songs from './songs';
import { fetchSongs } from '../../actions/song_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  songs: Object.values(state.entities.songs),
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id],
  filter: ownProps.filter,
  max: ownProps.max
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchUsers: () => dispatch(fetchUsers())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Songs);