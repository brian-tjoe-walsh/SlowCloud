import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return(
    {currentUser: state.entities.users[state.session.id],
    loc: ownProps.loc,
    history: ownProps.history}
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);