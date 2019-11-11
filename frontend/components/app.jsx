import React from 'react';
import SignupFormContainer from './sessions/signup_form_container';
import LoginFormContainer from './sessions/login_form_container';
import DiscoverContainer from './sessions/discover_container';
import ModalContainer from './modals/modal_container';
import SplashContainer from './sessions/splash_container';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LibraryContainer from './library/library_container';
import AlbumShowContainer from './album/album_show_container';
import AlbumsIndexContainer from './album/albums_index_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <AuthRoute path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/albums" component={AlbumsIndexContainer} />
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
        <Route exact path="/discover" component={DiscoverContainer} />
        <ProtectedRoute path="/library" component={LibraryContainer} />
      </div>
    )
    // if (!window.currentUser) {
    //   return (
    //     <div>
    //       <Switch>
    //         <AuthRoute path="/" component={SplashContainer} />
    //         <AuthRoute exact path="/login" component={LoginFormContainer} />
    //         <AuthRoute exact path="/signup" component={SignupFormContainer} />
    //       </Switch>
    //     </div>
    //   )} else {
    //   return (
    //     <div>
    //       <Switch>
    //         <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
    //         <Route exact path="/discover" component={DiscoverContainer} />
    //         <ProtectedRoute path="/library" component={LibraryContainer} />
    //       </Switch>
    //     </div>
    //   )}
    // };
  }
}
export default App;