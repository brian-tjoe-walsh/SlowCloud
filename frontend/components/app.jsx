import React from 'react';
import SignupFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import DiscoverContainer from './sessions/discover_container';
import ModalContainer from './modals/modal_container';
import SplashContainer from './sessions/splash_container';
import { Route, Redirect, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LibraryContainer from './library/library_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div>
        {/* <Switch> */}
          <AuthRoute path="/" component={SplashContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/discover" component={DiscoverContainer} />
          <ProtectedRoute path="/library" component={LibraryContainer} />
        {/* </Switch> */}
      </div>
  )};
}
export default App;